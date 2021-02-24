import unittest

from Python3.ransomnote import Solution


class TestcanConstruct(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: ransomNote = "a", magazine = "b"
        # Output: false

        self.assertEqual(Solution.canConstruct("a", "b"), false)

    def test_2(self):
        # For sanity checking:
        # Input: ransomNote = "aa", magazine = "ab"
        # Output: false

        self.assertEqual(Solution.canConstruct("aa", "ab"), false)

    def test_3(self):
        # For sanity checking:
        # Input: ransomNote = "aa", magazine = "aab"
        # Output: true

        self.assertEqual(Solution.canConstruct("aa", "aab"), true)


if __name__ == "__main__":
    unittest.main()
