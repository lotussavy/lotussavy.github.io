#!/usr/bin/env python3
"""Check same-site links and assets in generated Jekyll HTML.

Run after building Jekyll: python3 scripts/check_site_links.py _site.
External URLs and fragment identifiers are intentionally not checked.
"""
import argparse
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit

SITE_HOSTS = {"lotussavy.github.io", "www.lotussavy.github.io"}
SKIP_SCHEMES = {"mailto", "tel", "javascript", "data", "blob"}


class Links(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.links = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        for name in ("href", "src", "poster"):
            if name not in attrs:
                continue
            if name == "href" and tag not in {"a", "link", "area", "iframe"}:
                continue
            if name == "src" and tag not in {
                "img", "script", "iframe", "source", "video", "audio", "embed", "track"
            }:
                continue
            self.links.append((tag, name, attrs[name]))
        if tag in {"img", "source"} and attrs.get("srcset"):
            for item in attrs["srcset"].split(","):
                url = item.strip().split(" ", 1)[0]
                if url:
                    self.links.append((tag, "srcset", url))


def resolve(root, document, href):
    if not href or not href.strip() or href.startswith("#"):
        return None
    href = href.strip()
    parsed = urlsplit(href)
    if parsed.scheme in SKIP_SCHEMES:
        return None
    if parsed.scheme and parsed.scheme not in {"http", "https"}:
        return None
    if parsed.netloc and parsed.hostname not in SITE_HOSTS:
        return None

    page_url = "/" + document.relative_to(root).as_posix()
    if page_url.endswith("/index.html"):
        page_url = page_url[:-10]
    absolute = urlsplit(urljoin("https://lotussavy.github.io" + page_url, href))
    if absolute.hostname not in SITE_HOSTS:
        return None
    url_path = unquote(absolute.path)
    path = (root / url_path.lstrip("/")).resolve()
    if not path.is_relative_to(root.resolve()):
        return ("PATH_ESCAPE", url_path)
    candidates = [path]
    if path.suffix == "":
        candidates += [path / "index.html", Path(str(path) + ".html")]
    if any(p.is_file() for p in candidates):
        return None
    return ("MISSING", url_path)


def audit(root):
    docs = sorted(root.rglob("*.html"))
    failures = []
    count = 0
    for doc in docs:
        parser = Links()
        parser.feed(doc.read_text(encoding="utf-8", errors="replace"))
        for tag, name, link in parser.links:
            count += 1
            issue = resolve(root, doc, link)
            if issue:
                failures.append((doc.relative_to(root), tag, name, link, issue))
    return docs, count, failures


def main():
    p = argparse.ArgumentParser()
    p.add_argument("site", nargs="?", default="_site")
    args = p.parse_args()
    root = Path(args.site).resolve()
    if not root.is_dir():
        p.error(f"Built site directory not found: {root}. Run Jekyll build first.")
    docs, count, failures = audit(root)
    print(f"Checked {len(docs)} HTML pages and {count} link/asset references.")
    if failures:
        for doc, tag, name, link, issue in failures[:100]:
            print(f"ERROR {doc}: <{tag}> {name}={link!r}: {issue[0]} {issue[1]}")
        if len(failures) > 100:
            print(f"... plus {len(failures) - 100} additional errors")
        raise SystemExit(f"{len(failures)} invalid same-site references found.")
    print("PASS: all inspected same-site targets exist.")


if __name__ == "__main__":
    main()
