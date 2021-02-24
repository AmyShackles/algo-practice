import unittest

from Python3.binarysearch import Solution


class Testsearch(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums = [-1,0,3,5,9,12], target = 9
        # Output: 4

        self.assertEqual(Solution.search([-1, 0, 3, 5, 9, 12], 9), 4)

    def test_2(self):
        # For sanity checking:
        # Input: nums = [-1,0,3,5,9,12], target = 2
        # Output: -1

        self.assertEqual(Solution.search([-1, 0, 3, 5, 9, 12], 2), -1)


if __name__ == "__main__":
    unittest.main()
