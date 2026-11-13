"""OPT-001: What Is Optimization? — independently runnable teaching example.

Synthetic illustrative USD; not calibrated fleet economics.
Python 3.10+ standard library only.
"""


def revenue(n: int) -> int:
    return 100 * n - 5 * n**2


def cost(n: int) -> int:
    return 20 * n + 100


def profit(n: int) -> int:
    return revenue(n) - cost(n)


def main() -> None:
    feasible_fleets = range(13)
    results = [(n, profit(n)) for n in feasible_fleets]
    best_fleet, best_profit = max(results, key=lambda item: item[1])

    assert len(results) == 13
    assert (best_fleet, best_profit) == (8, 220)
    assert profit(4) == 140
    assert revenue(10) == 500 and profit(10) == 200

    print(f"Optimal fleet: {best_fleet} vehicles")
    print(f"Maximum profit: ${best_profit}")


if __name__ == "__main__":
    main()
