import unittest

from Python3.longestpalindrome import Solution


class TestlongestPalindrome(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: s = "abccccdd"
        # Output: 7

        self.assertEqual(Solution.longestPalindrome("abccccdd"), 7)

    def test_2(self):
        # For sanity checking:
        # Input: s = "a"
        # Output: 1

        self.assertEqual(Solution.longestPalindrome("a"), 1)

    def test_3(self):
        # For sanity checking:
        # Input: s = "bb"
        # Output: 2

        self.assertEqual(Solution.longestPalindrome("bb"), 2)


if __name__ == "__main__":
    unittest.main()
