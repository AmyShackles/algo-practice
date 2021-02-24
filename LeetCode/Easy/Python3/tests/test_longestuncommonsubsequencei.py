import unittest

from Python3.longestuncommonsubsequencei import Solution


class TestfindLUSlength(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: a = "aba", b = "cdc"
        # Output: 3

        self.assertEqual(Solution.findLUSlength("aba", "cdc"), 3)

    def test_2(self):
        # For sanity checking:
        # Input: a = "aaa", b = "bbb"
        # Output: 3

        self.assertEqual(Solution.findLUSlength("aaa", "bbb"), 3)

    def test_3(self):
        # For sanity checking:
        # Input: a = "aaa", b = "aaa"
        # Output: -1

        self.assertEqual(Solution.findLUSlength("aaa", "aaa"), -1)


if __name__ == "__main__":
    unittest.main()
