import unittest

from Python3.availablecapturesforrook import Solution


class TestnumRookCaptures(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
        # Output: 3

        self.assertEqual(
            Solution.numRookCaptures(
                [
                    [".", ".", ".", ".", ".", ".", ".", "."],
                    [".", ".", ".", "p", ".", ".", ".", "."],
                    [".", ".", ".", "R", ".", ".", ".", "p"],
                    [".", ".", ".", ".", ".", ".", ".", "."],
                    [".", ".", ".", ".", ".", ".", ".", "."],
                    [".", ".", ".", "p", ".", ".", ".", "."],
                    [".", ".", ".", ".", ".", ".", ".", "."],
                    [".", ".", ".", ".", ".", ".", ".", "."],
                ]
            ),
            3,
        )

    def test_2(self):
        # For sanity checking:
        # Input: [[".",".",".",".",".",".",".","."],[".","p","p","p","p","p",".","."],[".","p","p","B","p","p",".","."],[".","p","B","R","B","p",".","."],[".","p","p","B","p","p",".","."],[".","p","p","p","p","p",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
        # Output: 0

        self.assertEqual(
            Solution.numRookCaptures(
                [
                    [".", ".", ".", ".", ".", ".", ".", "."],
                    [".", "p", "p", "p", "p", "p", ".", "."],
                    [".", "p", "p", "B", "p", "p", ".", "."],
                    [".", "p", "B", "R", "B", "p", ".", "."],
                    [".", "p", "p", "B", "p", "p", ".", "."],
                    [".", "p", "p", "p", "p", "p", ".", "."],
                    [".", ".", ".", ".", ".", ".", ".", "."],
                    [".", ".", ".", ".", ".", ".", ".", "."],
                ]
            ),
            0,
        )

    def test_3(self):
        # For sanity checking:
        # Input: [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]]
        # Output: 3

        self.assertEqual(
            Solution.numRookCaptures(
                [
                    [".", ".", ".", ".", ".", ".", ".", "."],
                    [".", ".", ".", "p", ".", ".", ".", "."],
                    [".", ".", ".", "p", ".", ".", ".", "."],
                    ["p", "p", ".", "R", ".", "p", "B", "."],
                    [".", ".", ".", ".", ".", ".", ".", "."],
                    [".", ".", ".", "B", ".", ".", ".", "."],
                    [".", ".", ".", "p", ".", ".", ".", "."],
                    [".", ".", ".", ".", ".", ".", ".", "."],
                ]
            ),
            3,
        )


if __name__ == "__main__":
    unittest.main()
