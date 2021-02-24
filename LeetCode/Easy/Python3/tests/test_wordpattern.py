import unittest

from Python3.wordpattern import Solution


class TestwordPattern(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: pattern = "abba", s = "dog cat cat dog"
        # Output: true

        self.assertEqual(Solution.wordPattern("abba", "dog cat cat dog"), true)

    def test_2(self):
        # For sanity checking:
        # Input: pattern = "abba", s = "dog cat cat fish"
        # Output: false

        self.assertEqual(Solution.wordPattern("abba", "dog cat cat fish"), false)

    def test_3(self):
        # For sanity checking:
        # Input: pattern = "aaaa", s = "dog cat cat dog"
        # Output: false

        self.assertEqual(Solution.wordPattern("aaaa", "dog cat cat dog"), false)

    def test_4(self):
        # For sanity checking:
        # Input: pattern = "abba", s = "dog dog dog dog"
        # Output: false

        self.assertEqual(Solution.wordPattern("abba", "dog dog dog dog"), false)


if __name__ == "__main__":
    unittest.main()
