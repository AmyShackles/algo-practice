import unittest

from Python3.longestcontinuousincreasingsubsequence import Solution


class TestfindLengthOfLCIS(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums = [1,3,5,4,7]
        # Output: 3

        self.assertEqual(Solution.findLengthOfLCIS([1, 3, 5, 4, 7]), 3)

    def test_2(self):
        # For sanity checking:
        # Input: nums = [2,2,2,2,2]
        # Output: 1

        self.assertEqual(Solution.findLengthOfLCIS([2, 2, 2, 2, 2]), 1)


if __name__ == "__main__":
    unittest.main()
