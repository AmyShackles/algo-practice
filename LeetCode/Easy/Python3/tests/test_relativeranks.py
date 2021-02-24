import unittest

from Python3.relativeranks import Solution


class TestfindRelativeRanks(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: score = [5,4,3,2,1]
        # Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]

        self.assertEqual(
            Solution.findRelativeRanks([5, 4, 3, 2, 1]),
            ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"],
        )

    def test_2(self):
        # For sanity checking:
        # Input: score = [10,3,8,9,4]
        # Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]

        self.assertEqual(
            Solution.findRelativeRanks([10, 3, 8, 9, 4]),
            ["Gold Medal", "5", "Bronze Medal", "Silver Medal", "4"],
        )


if __name__ == "__main__":
    unittest.main()
