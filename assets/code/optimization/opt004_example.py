"""OPT-004: exact, independent piecewise certificate; no external packages.

The browser bounds each quadratic branch. This example instead examines the
endpoints, peaks and the exact branch crossover at 14/3 on the feasible interval.
"""
from fractions import Fraction as F


def score(x):
    x = F(x)
    if not 0 <= x <= 10:
        raise ValueError("x must lie in [0, 10]")
    return max(6 - (x-2)**2, 10 - (x-8)**2)


def certify(cap):
    if type(cap) is not int or not 0 <= cap <= 10:
        raise ValueError("U must be an integer from 0 through 10")
    # On each side of 14/3 the score is one concave quadratic.
    candidates = {F(0), F(cap)}
    candidates.update(p for p in (F(2), F(14, 3), F(8)) if p <= cap)
    value = max(score(x) for x in candidates)
    optimizers = tuple(sorted(x for x in candidates if score(x) == value))
    return value, optimizers


def compare(recorded, cap):
    certify(cap)  # Validate the model limit.
    points = sorted({F(x) for x in recorded})
    rows = tuple((x, score(x), x <= cap) for x in points)
    feasible = tuple(row for row in rows if row[2])
    best = max((row[1] for row in feasible), default=None)
    winners = tuple(row[0] for row in feasible if row[1] == best)
    return rows, best, winners


if __name__ == "__main__":
    _, best, winners = compare([0, 2, 4], 10)
    assert (best, winners) == (F(6), (F(2),))
    assert certify(10) == (F(10), (F(8),))
    assert certify(6) == (F(6), (F(2), F(6)))
    assert certify(5) == (F(6), (F(2),))
    assert compare([8], 5)[1] is None
    print("U=10: best recorded score 6 at x=2; global score 10 at x=8")
    print("U=6: global score 6 at x=2 and x=6")
    print("U=5: x=8 is infeasible; global score 6 at x=2")
    print("PASS: exact comparison record and independent piecewise certificate")
