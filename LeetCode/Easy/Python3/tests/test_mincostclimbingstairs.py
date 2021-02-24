import unittest

from Python3.mincostclimbingstairs import Solution


class TestminCostClimbingStairs(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: cost = [10, 15, 20]
        # Output: 15

        self.assertEqual(Solution.minCostClimbingStairs([10, 15, 20]), 15)

    def test_2(self):
        # For sanity checking:
        # Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
        # Output: 6

        self.assertEqual(
            Solution.minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]), 6
        )


if __name__ == "__main__":
    unittest.main()
