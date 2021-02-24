import unittest

from Python3.matrixdiagonalsum import Solution


class TestdiagonalSum(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: mat = [[5]]
        # Output: 5

        self.assertEqual(Solution.diagonalSum([[5]]), 5)


if __name__ == "__main__":
    unittest.main()
