import unittest

from Python3.keyboardrow import Solution


class TestfindWords(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: words = ["Hello","Alaska","Dad","Peace"]
        # Output: ["Alaska","Dad"]

        self.assertEqual(
            Solution.findWords(["Hello", "Alaska", "Dad", "Peace"]), ["Alaska", "Dad"]
        )

    def test_2(self):
        # For sanity checking:
        # Input: words = ["omk"]
        # Output: []

        self.assertEqual(Solution.findWords(["omk"]), [])

    def test_3(self):
        # For sanity checking:
        # Input: words = ["adsdf","sfd"]
        # Output: ["adsdf","sfd"]

        self.assertEqual(Solution.findWords(["adsdf", "sfd"]), ["adsdf", "sfd"])


if __name__ == "__main__":
    unittest.main()
