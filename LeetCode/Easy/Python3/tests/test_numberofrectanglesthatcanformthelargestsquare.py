import unittest

from Python3.numberofrectanglesthatcanformthelargestsquare import Solution


class TestcountGoodRectangles(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: rectangles = [[5,8],[3,9],[5,12],[16,5]]
        # Output: 3

        self.assertEqual(
            Solution.countGoodRectangles([[5, 8], [3, 9], [5, 12], [16, 5]]), 3
        )

    def test_2(self):
        # For sanity checking:
        # Input: rectangles = [[2,3],[3,7],[4,3],[3,7]]
        # Output: 3

        self.assertEqual(
            Solution.countGoodRectangles([[2, 3], [3, 7], [4, 3], [3, 7]]), 3
        )


if __name__ == "__main__":
    unittest.main()
