import unittest

from Python3.findpivotindex import Solution


class TestpivotIndex(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums = [1,7,3,6,5,6]
        # Output: 3

        self.assertEqual(Solution.pivotIndex([1, 7, 3, 6, 5, 6]), 3)

    def test_2(self):
        # For sanity checking:
        # Input: nums = [1,2,3]
        # Output: -1

        self.assertEqual(Solution.pivotIndex([1, 2, 3]), -1)

    def test_3(self):
        # For sanity checking:
        # Input: nums = [2,1,-1]
        # Output: 0

        self.assertEqual(Solution.pivotIndex([2, 1, -1]), 0)


if __name__ == "__main__":
    unittest.main()
