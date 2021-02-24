import unittest

from Python3.findwinneronatictactoegame import Solution


class Testtictactoe(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]
        # Output: "A"

        self.assertEqual(
            Solution.tictactoe([[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]]), "A"
        )

    def test_2(self):
        # For sanity checking:
        # Input: moves = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]
        # Output: "B"

        self.assertEqual(
            Solution.tictactoe([[0, 0], [1, 1], [0, 1], [0, 2], [1, 0], [2, 0]]), "B"
        )

    def test_3(self):
        # For sanity checking:
        # Input: moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]
        # Output: "Draw"

        self.assertEqual(
            Solution.tictactoe(
                [[0, 0], [1, 1], [2, 0], [1, 0], [1, 2], [2, 1], [0, 1], [0, 2], [2, 2]]
            ),
            "Draw",
        )

    def test_4(self):
        # For sanity checking:
        # Input: moves = [[0,0],[1,1]]
        # Output: "Pending"

        self.assertEqual(Solution.tictactoe([[0, 0], [1, 1]]), "Pending")


if __name__ == "__main__":
    unittest.main()
