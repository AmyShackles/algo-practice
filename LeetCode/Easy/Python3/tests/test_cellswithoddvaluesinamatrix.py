import unittest

from Python3.cellswithoddvaluesinamatrix import Solution


class TestoddCells(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: n = 2, m = 3, indices = [[0,1],[1,1]]
        # Output: 6

        self.assertEqual(Solution.oddCells(2, 3, [[0, 1], [1, 1]]), 6)

    def test_2(self):
        # For sanity checking:
        # Input: n = 2, m = 2, indices = [[1,1],[0,0]]
        # Output: 0

        self.assertEqual(Solution.oddCells(2, 2, [[1, 1], [0, 0]]), 0)


if __name__ == "__main__":
    unittest.main()
