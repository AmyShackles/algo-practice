import unittest

from Python3.numberoflinestowritestring import Solution


class TestnumberOfLines(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = "abcdefghijklmnopqrstuvwxyz"
        # Output: [3,60]

        self.assertEqual(
            Solution.numberOfLines(
                [
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                ],
                "abcdefghijklmnopqrstuvwxyz",
            ),
            [3, 60],
        )

    def test_2(self):
        # For sanity checking:
        # Input: widths = [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = "bbbcccdddaaa"
        # Output: [2,4]

        self.assertEqual(
            Solution.numberOfLines(
                [
                    4,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                ],
                "bbbcccdddaaa",
            ),
            [2, 4],
        )


if __name__ == "__main__":
    unittest.main()
