import unittest

from Python3.matrixcellsindistanceorder import Solution


class TestallCellsDistOrder(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: R = 1, C = 2, r0 = 0, c0 = 0
        # Output: [[0,0],[0,1]]

        self.assertEqual(Solution.allCellsDistOrder(1, 2, 0, 0), [[0, 0], [0, 1]])

    def test_2(self):
        # For sanity checking:
        # Input: R = 2, C = 2, r0 = 0, c0 = 1
        # Output: [[0,1],[0,0],[1,1],[1,0]]

        self.assertEqual(
            Solution.allCellsDistOrder(2, 2, 0, 1), [[0, 1], [0, 0], [1, 1], [1, 0]]
        )

    def test_3(self):
        # For sanity checking:
        # Input: R = 2, C = 3, r0 = 1, c0 = 2
        # Output: [[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]

        self.assertEqual(
            Solution.allCellsDistOrder(2, 3, 1, 2),
            [[1, 2], [0, 2], [1, 1], [0, 1], [1, 0], [0, 0]],
        )


if __name__ == "__main__":
    unittest.main()
