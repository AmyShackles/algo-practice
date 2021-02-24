import unittest

from Python3.greatestcommondivisorofstrings import Solution


class TestgcdOfStrings(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: str1 = "ABCABC", str2 = "ABC"
        # Output: "ABC"

        self.assertEqual(Solution.gcdOfStrings("ABCABC", "ABC"), "ABC")

    def test_2(self):
        # For sanity checking:
        # Input: str1 = "ABABAB", str2 = "ABAB"
        # Output: "AB"

        self.assertEqual(Solution.gcdOfStrings("ABABAB", "ABAB"), "AB")

    def test_3(self):
        # For sanity checking:
        # Input: str1 = "LEET", str2 = "CODE"
        # Output: ""

        self.assertEqual(Solution.gcdOfStrings("LEET", "CODE"), "")

    def test_4(self):
        # For sanity checking:
        # Input: str1 = "ABCDEF", str2 = "ABC"
        # Output: ""

        self.assertEqual(Solution.gcdOfStrings("ABCDEF", "ABC"), "")


if __name__ == "__main__":
    unittest.main()
