import unittest

from Python3.smallestrangei import Solution


class TestsmallestRangeI(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: A = [1], K = 0
        # Output: 0

        self.assertEqual(Solution.smallestRangeI([1], 0), 0)

    def test_2(self):
        # For sanity checking:
        # Input: A = [0,10], K = 2
        # Output: 6

        self.assertEqual(Solution.smallestRangeI([0, 10], 2), 6)

    def test_3(self):
        # For sanity checking:
        # Input: A = [1,3,6], K = 3
        # Output: 0

        self.assertEqual(Solution.smallestRangeI([1, 3, 6], 3), 0)


if __name__ == "__main__":
    unittest.main()
