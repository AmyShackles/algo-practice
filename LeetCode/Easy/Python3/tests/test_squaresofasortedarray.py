import unittest

from Python3.squaresofasortedarray import Solution


class TestsortedSquares(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums = [-4,-1,0,3,10]
        # Output: [0,1,9,16,100]

        self.assertEqual(Solution.sortedSquares([-4, -1, 0, 3, 10]), [0, 1, 9, 16, 100])

    def test_2(self):
        # For sanity checking:
        # Input: nums = [-7,-3,2,3,11]
        # Output: [4,9,9,49,121]

        self.assertEqual(Solution.sortedSquares([-7, -3, 2, 3, 11]), [4, 9, 9, 49, 121])


if __name__ == "__main__":
    unittest.main()
