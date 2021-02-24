import unittest

from Python3.toeplitzmatrix import Solution


class TestisToeplitzMatrix(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
        # Output: true

        self.assertEqual(
            Solution.isToeplitzMatrix([[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]]), true
        )

    def test_2(self):
        # For sanity checking:
        # Input: matrix = [[1,2],[2,2]]
        # Output: false

        self.assertEqual(Solution.isToeplitzMatrix([[1, 2], [2, 2]]), false)


if __name__ == "__main__":
    unittest.main()
