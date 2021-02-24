import unittest

from Python3.repeatedsubstringpattern import Solution


class TestrepeatedSubstringPattern(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: s = "abab"
        # Output: true

        self.assertEqual(Solution.repeatedSubstringPattern("abab"), true)

    def test_2(self):
        # For sanity checking:
        # Input: s = "aba"
        # Output: false

        self.assertEqual(Solution.repeatedSubstringPattern("aba"), false)

    def test_3(self):
        # For sanity checking:
        # Input: s = "abcabcabcabc"
        # Output: true

        self.assertEqual(Solution.repeatedSubstringPattern("abcabcabcabc"), true)


if __name__ == "__main__":
    unittest.main()
