import unittest

from Python3.transposematrix import Solution


class Testtranspose(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
        # Output: [[1,4,7],[2,5,8],[3,6,9]]

        self.assertEqual(
            Solution.transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]),
            [[1, 4, 7], [2, 5, 8], [3, 6, 9]],
        )

    def test_2(self):
        # For sanity checking:
        # Input: matrix = [[1,2,3],[4,5,6]]
        # Output: [[1,4],[2,5],[3,6]]

        self.assertEqual(
            Solution.transpose([[1, 2, 3], [4, 5, 6]]), [[1, 4], [2, 5], [3, 6]]
        )


if __name__ == "__main__":
    unittest.main()
