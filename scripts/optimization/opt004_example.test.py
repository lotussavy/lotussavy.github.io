"""Independent exact certificates and consistency checks for OPT-004."""
import importlib.util
from pathlib import Path
import sys
import unittest

sys.dont_write_bytecode = True
root = Path(__file__).resolve().parents[2]
source = root / "assets/code/optimization/opt004_example.py"
spec = importlib.util.spec_from_file_location("opt004", source)
example = importlib.util.module_from_spec(spec)
spec.loader.exec_module(example)


class OptimalityExample(unittest.TestCase):
    def test_all_limits_against_independent_closed_form(self):
        for cap in range(11):
            if cap < 2:
                expected = (6 - (cap-2)**2, (cap,))
            elif cap < 6:
                expected = (6, (2,))
            elif cap == 6:
                expected = (6, (2, 6))
            elif cap == 7:
                expected = (9, (7,))
            else:
                expected = (10, (8,))
            self.assertEqual(example.certify(cap), expected)
            for i in range(201):
                x = example.F(i, 20)
                piecewise = -x*x + 4*x + 2 if x <= example.F(14, 3) else -x*x + 16*x - 54
                self.assertEqual(example.score(x), piecewise)
                if x <= cap:
                    self.assertLessEqual(piecewise, expected[0])

    def test_comparison_ties_infeasibility_and_empty_record(self):
        self.assertEqual(example.compare([0, 2, 4], 10)[1:], (6, (2,)))
        self.assertEqual(example.compare([2, 6, 6], 6)[1:], (6, (2, 6)))
        self.assertEqual(example.compare([8], 5)[1:], (None, ()))
        self.assertEqual(example.compare([], 10)[1:], (None, ()))
        self.assertEqual(example.score("0.1"), example.F(239, 100))
        for cap in (-1, 11, 2.5, True):
            with self.assertRaises(ValueError):
                example.certify(cap)

    def test_displayed_python_excerpt_matches_download(self):
        lesson = (root / "optimization/learn/foundations/what-does-optimal-mean.md").read_text()
        excerpt = source.read_text().split('def score(x):')[1].split('\n\ndef certify')[0]
        self.assertIn('def score(x):' + excerpt.rstrip(), lesson)


if __name__ == "__main__":
    unittest.main()
