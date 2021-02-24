import unittest

from Python3.longestharmonioussubsequence import Solution


class TestfindLHS(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums = [1,3,2,2,5,2,3,7]
        # Output: 5

        self.assertEqual(Solution.findLHS([1, 3, 2, 2, 5, 2, 3, 7]), 5)

    def test_2(self):
        # For sanity checking:
        # Input: nums = [1,2,3,4]
        # Output: 2

        self.assertEqual(Solution.findLHS([1, 2, 3, 4]), 2)

    def test_3(self):
        # For sanity checking:
        # Input: nums = [1,1,1,1]
        # Output: 0

        self.assertEqual(Solution.findLHS([1, 1, 1, 1]), 0)


if __name__ == "__main__":
    unittest.main()
