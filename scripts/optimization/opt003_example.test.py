"""Exact, independently derived certificates for the OPT-003 Python example."""
import importlib.util
from pathlib import Path
import sys
import unittest

sys.dont_write_bytecode = True
root = Path(__file__).resolve().parents[2]
source = root / "assets/code/optimization/opt003_example.py"
spec = importlib.util.spec_from_file_location("opt003", source)
example = importlib.util.module_from_spec(spec)
spec.loader.exec_module(example)


class ExactFeasibility(unittest.TestCase):
    def test_reference_sets_and_candidates(self):
        for settings, expected in (({}, 2), ({"time": 0}, 0),
                                   ({"minimum_on": True, "minimum": 8}, 1),
                                   ({"minimum_on": True, "minimum": 9}, -1)):
            self.assertEqual(example.dimension(example.vertices(example.rules(**settings))), expected)
        self.assertTrue(example.feasible("0.1", "0.2", example.rules()))
        self.assertFalse(example.feasible(-1, 0, example.rules()))

    def test_analytic_nonemptiness_and_dimension(self):
        # Maximum possible x+y under staffing alone occurs at (0,S) for S<=10,
        # and at ((S-10)/2,10) otherwise. Compare the lower bound with it.
        count = 0
        for time_on in (False, True):
            for staff_on in (False, True):
                for minimum_on in (False, True):
                    for time in (0, 1, 8, 10, 19, 20):
                        for staff in (0, 1, 9, 10, 11, 20, 29, 30):
                            for minimum in (0, 1, 6, 8, 9, 19, 20):
                                upper_staff = (staff if staff <= 10 else example.F(staff+10, 2)) if staff_on else 20
                                upper = min(time, upper_staff) if time_on else upper_staff
                                if minimum_on and minimum > upper:
                                    dim = -1
                                elif upper == 0:
                                    dim = 0
                                elif minimum_on and minimum == upper:
                                    dim = 1 if time_on and time < upper_staff else 0
                                else:
                                    dim = 2
                                points = example.vertices(example.rules(time, staff, minimum, time_on, staff_on, minimum_on))
                                self.assertEqual(example.dimension(points), dim)
                                count += 1
        self.assertEqual(count, 2688)

    def test_download_and_excerpt_agree_and_invalid_settings_fail(self):
        lesson = (root / "optimization/learn/foundations/feasibility-and-trade-offs.md").read_text()
        excerpt = 'def feasible(x, y, constraints):\n    x, y = F(x), F(y)\n    return all(a*x + b*y <= c for a, b, c in constraints)'
        self.assertIn(excerpt, source.read_text())
        self.assertIn(excerpt, lesson)
        for settings in ({"time": -1}, {"staff": 31}, {"minimum": 20.5}, {"time_on": 1}):
            with self.assertRaises((ValueError, TypeError)):
                example.rules(**settings)


if __name__ == "__main__":
    unittest.main()
