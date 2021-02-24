import unittest

from Python3.largestsubstringbetweentwoequalcharacters import Solution


class TestmaxLengthBetweenEqualCharacters(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: s = "aa"
        # Output: 0

        self.assertEqual(Solution.maxLengthBetweenEqualCharacters("aa"), 0)

    def test_2(self):
        # For sanity checking:
        # Input: s = "abca"
        # Output: 2

        self.assertEqual(Solution.maxLengthBetweenEqualCharacters("abca"), 2)

    def test_3(self):
        # For sanity checking:
        # Input: s = "cbzxy"
        # Output: -1

        self.assertEqual(Solution.maxLengthBetweenEqualCharacters("cbzxy"), -1)

    def test_4(self):
        # For sanity checking:
        # Input: s = "cabbac"
        # Output: 4

        self.assertEqual(Solution.maxLengthBetweenEqualCharacters("cabbac"), 4)


if __name__ == "__main__":
    unittest.main()
