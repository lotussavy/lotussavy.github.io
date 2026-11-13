"""OPT-002: a synthetic model, solved by checking all 13 fleet choices.
Python 3.10+; values are illustrative USD per period. No solver package needed.
"""


def solve(objective="profit", budget=260, available=12):
    if objective not in ("profit", "revenue", "cost"):
        raise ValueError("Choose profit, revenue or cost")
    if type(budget) is not int or not 0 <= budget <= 400:
        raise ValueError("Budget must be integer USD from 0 to 400")
    if type(available) is not int or not 0 <= available <= 12:
        raise ValueError("Available fleet must be an integer from 0 to 12")
    feasible = []
    for n in range(13):
        revenue = 100 * n - 5 * n**2
        cost = 20 * n + 100
        row = {"fleet": n, "revenue": revenue, "cost": cost,
               "profit": revenue - cost}
        if n <= available and cost <= budget:
            feasible.append(row)
    if not feasible:
        return {"status": "infeasible", "fleet": None, "value": None}
    choose_best = min if objective == "cost" else max
    best = choose_best(feasible, key=lambda row: row[objective])
    return {"status": "optimal", "fleet": best["fleet"],
            "value": best[objective]}


if __name__ == "__main__":
    expected = [
        ("profit", 260, 12, 8, 220),
        ("profit", 220, 12, 6, 200),
        ("profit", 260, 4, 4, 140),
        ("revenue", 400, 12, 10, 500),
        ("cost", 400, 12, 0, 100),
        ("profit", 80, 12, None, None),
        ("profit", 100, 12, 0, -100),
    ]
    for objective, budget, available, fleet, value in expected:
        result = solve(objective, budget, available)
        assert (result["fleet"], result["value"]) == (fleet, value)
        assert result["status"] == ("infeasible" if fleet is None else "optimal")
    print("PASS: seven reference models, including infeasibility and a loss.")
    print("Default model:", solve())
