import unittest

from Python3.buddystrings import Solution


class TestbuddyStrings(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: A = "ab", B = "ba"
        # Output: true

        self.assertEqual(Solution.buddyStrings("ab", "ba"), true)

    def test_2(self):
        # For sanity checking:
        # Input: A = "ab", B = "ab"
        # Output: false

        self.assertEqual(Solution.buddyStrings("ab", "ab"), false)

    def test_3(self):
        # For sanity checking:
        # Input: A = "aa", B = "aa"
        # Output: true

        self.assertEqual(Solution.buddyStrings("aa", "aa"), true)

    def test_4(self):
        # For sanity checking:
        # Input: A = "aaaaaaabc", B = "aaaaaaacb"
        # Output: true

        self.assertEqual(Solution.buddyStrings("aaaaaaabc", "aaaaaaacb"), true)

    def test_5(self):
        # For sanity checking:
        # Input: A = "", B = "aa"
        # Output: false

        self.assertEqual(Solution.buddyStrings("", "aa"), false)


if __name__ == "__main__":
    unittest.main()
