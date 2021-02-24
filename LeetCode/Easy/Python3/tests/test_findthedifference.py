import unittest

from Python3.findthedifference import Solution


class TestfindTheDifference(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: s = "abcd", t = "abcde"
        # Output: "e"

        self.assertEqual(Solution.findTheDifference("abcd", "abcde"), "e")

    def test_2(self):
        # For sanity checking:
        # Input: s = "", t = "y"
        # Output: "y"

        self.assertEqual(Solution.findTheDifference("", "y"), "y")

    def test_3(self):
        # For sanity checking:
        # Input: s = "a", t = "aa"
        # Output: "a"

        self.assertEqual(Solution.findTheDifference("a", "aa"), "a")

    def test_4(self):
        # For sanity checking:
        # Input: s = "ae", t = "aea"
        # Output: "a"

        self.assertEqual(Solution.findTheDifference("ae", "aea"), "a")


if __name__ == "__main__":
    unittest.main()
