"""Independent certificates and publication/code consistency for OPT-002."""
from pathlib import Path
import importlib.util
import json
import sys
import unittest

sys.dont_write_bytecode = True

ROOT = Path(__file__).resolve().parents[2]
SOURCE = ROOT / "assets/code/optimization/opt002_example.py"
spec = importlib.util.spec_from_file_location("opt002", SOURCE)
example = importlib.util.module_from_spec(spec)
spec.loader.exec_module(example)


class ModelChecks(unittest.TestCase):
    def test_all_supported_models(self):
        fixture = json.loads((ROOT / "scripts/optimization/profit-fixtures.json").read_text())["rows"]
        count = 0
        for objective, column, vertex in [("profit", 3, 8), ("revenue", 1, 10), ("cost", 2, 0)]:
            for budget in range(401):
                for available in range(13):
                    cap = min(12, available, (budget - 100) // 20)
                    fleet = None if cap < 0 else min(vertex, cap)
                    result = example.solve(objective, budget, available)
                    self.assertEqual(result["fleet"], fleet)
                    self.assertEqual(result["value"], None if fleet is None else fixture[fleet][column])
                    self.assertEqual(result["status"], "infeasible" if cap < 0 else "optimal")
                    count += 1
        self.assertEqual(count, 15639)

    def test_invalid_parameters(self):
        for budget in [-1, 401, 260.5, "260", True]:
            with self.assertRaises(ValueError):
                example.solve(budget=budget)
        for available in [-1, 13, 4.5, "4", True]:
            with self.assertRaises(ValueError):
                example.solve(available=available)

    def test_published_code_matches_the_download(self):
        lesson = (ROOT / "optimization/learn/foundations/decisions-objectives-constraints.md").read_text()
        block = lesson.split("```python\n", 1)[1].split("\n```", 1)[0]
        self.assertEqual(block.strip(), SOURCE.read_text().strip())


if __name__ == "__main__":
    unittest.main()
