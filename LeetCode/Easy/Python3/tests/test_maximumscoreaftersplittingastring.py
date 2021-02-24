import unittest

from Python3.maximumscoreaftersplittingastring import Solution


class TestmaxScore(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: s = "011101"
        # Output: 5

        self.assertEqual(Solution.maxScore("011101"), 5)

    def test_2(self):
        # For sanity checking:
        # Input: s = "00111"
        # Output: 5

        self.assertEqual(Solution.maxScore("00111"), 5)

    def test_3(self):
        # For sanity checking:
        # Input: s = "1111"
        # Output: 3

        self.assertEqual(Solution.maxScore("1111"), 3)


if __name__ == "__main__":
    unittest.main()
