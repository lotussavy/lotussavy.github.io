"""OPT-003: exact feasibility checks and vertices; Python standard library only.

This independently intersects boundary pairs; the browser clips a polygon.
Activity hours are continuous. Fraction avoids floating-point roundoff here.
"""
from fractions import Fraction as F
from itertools import combinations


def rules(time=8, staff=10, minimum=6,
          time_on=True, staff_on=True, minimum_on=False):
    for name, value, maximum in (("time", time, 20), ("staff", staff, 30),
                                  ("minimum", minimum, 20)):
        if type(value) is not int or not 0 <= value <= maximum:
            raise ValueError(f"{name} must be an integer in [0, {maximum}]")
    if any(type(flag) is not bool for flag in (time_on, staff_on, minimum_on)):
        raise TypeError("Constraint switches must be booleans")
    # Each triple means a*x + b*y <= c. The domain is always active.
    result = [(-1, 0, 0), (0, -1, 0), (1, 0, 10), (0, 1, 10)]
    if time_on:
        result.append((1, 1, time))
    if staff_on:
        result.append((2, 1, staff))
    if minimum_on:
        result.append((-1, -1, -minimum))
    return tuple(result)


def feasible(x, y, constraints):
    x, y = F(x), F(y)
    return all(a*x + b*y <= c for a, b, c in constraints)


def vertices(constraints):
    """Return exact vertices, sorted by x then y, including degenerate sets."""
    found = set()
    for (a, b, c), (d, e, f) in combinations(constraints, 2):
        determinant = a*e - b*d
        if determinant == 0:
            continue
        x = F(c*e - b*f, determinant)
        y = F(a*f - c*d, determinant)
        if feasible(x, y, constraints):
            found.add((x, y))
    return tuple(sorted(found))


def dimension(points):
    """-1 = empty, 0 = one point, 1 = line segment, 2 = area."""
    if not points:
        return -1
    if len(points) == 1:
        return 0
    x0, y0 = points[0]
    x1, y1 = points[1]
    return 2 if any((x1-x0)*(y-y0) != (y1-y0)*(x-x0)
                    for x, y in points[2:]) else 1


if __name__ == "__main__":
    base = rules()
    assert vertices(base) == ((F(0), F(0)), (F(0), F(8)),
                              (F(2), F(6)), (F(5), F(0)))
    assert feasible(3, 4, base) and not feasible(4, 4, base)
    assert feasible(4, 2, base)
    assert not vertices(rules(minimum=9, minimum_on=True))
    assert dimension(vertices(rules(minimum=8, minimum_on=True))) == 1
    assert vertices(rules(time=0)) == ((F(0), F(0)),)
    for point in vertices(base):
        print(tuple(str(coordinate) for coordinate in point))
    print("PASS: default polygon, three candidate checks, empty, line and point")
