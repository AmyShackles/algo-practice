import unittest

from Python3.searchinsertposition import Solution


class TestsearchInsert(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums = [1,3,5,6], target = 5
        # Output: 2

        self.assertEqual(Solution.searchInsert([1, 3, 5, 6], 5), 2)

    def test_2(self):
        # For sanity checking:
        # Input: nums = [1,3,5,6], target = 2
        # Output: 1

        self.assertEqual(Solution.searchInsert([1, 3, 5, 6], 2), 1)

    def test_3(self):
        # For sanity checking:
        # Input: nums = [1,3,5,6], target = 7
        # Output: 4

        self.assertEqual(Solution.searchInsert([1, 3, 5, 6], 7), 4)

    def test_4(self):
        # For sanity checking:
        # Input: nums = [1,3,5,6], target = 0
        # Output: 0

        self.assertEqual(Solution.searchInsert([1, 3, 5, 6], 0), 0)

    def test_5(self):
        # For sanity checking:
        # Input: nums = [1], target = 0
        # Output: 0

        self.assertEqual(Solution.searchInsert([1], 0), 0)


if __name__ == "__main__":
    unittest.main()
