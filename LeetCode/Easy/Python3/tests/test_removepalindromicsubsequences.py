import unittest

from Python3.removepalindromicsubsequences import Solution


class TestremovePalindromeSub(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: s = "ababa"
        # Output: 1

        self.assertEqual(Solution.removePalindromeSub("ababa"), 1)

    def test_2(self):
        # For sanity checking:
        # Input: s = "abb"
        # Output: 2

        self.assertEqual(Solution.removePalindromeSub("abb"), 2)

    def test_3(self):
        # For sanity checking:
        # Input: s = "baabb"
        # Output: 2

        self.assertEqual(Solution.removePalindromeSub("baabb"), 2)

    def test_4(self):
        # For sanity checking:
        # Input: s = ""
        # Output: 0

        self.assertEqual(Solution.removePalindromeSub(""), 0)


if __name__ == "__main__":
    unittest.main()
