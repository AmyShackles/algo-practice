import unittest

from Python3.validpalindromeii import Solution


class TestvalidPalindrome(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: "aba"
        # Output: True

        self.assertEqual(Solution.validPalindrome("aba"), True)

    def test_2(self):
        # For sanity checking:
        # Input: "abca"
        # Output: True

        self.assertEqual(Solution.validPalindrome("abca"), True)


if __name__ == "__main__":
    unittest.main()
