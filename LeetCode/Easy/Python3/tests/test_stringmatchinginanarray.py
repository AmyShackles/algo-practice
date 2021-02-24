import unittest

from Python3.stringmatchinginanarray import Solution


class TeststringMatching(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: words = ["mass","as","hero","superhero"]
        # Output: ["as","hero"]

        self.assertEqual(
            Solution.stringMatching(["mass", "as", "hero", "superhero"]), ["as", "hero"]
        )

    def test_2(self):
        # For sanity checking:
        # Input: words = ["leetcode","et","code"]
        # Output: ["et","code"]

        self.assertEqual(
            Solution.stringMatching(["leetcode", "et", "code"]), ["et", "code"]
        )

    def test_3(self):
        # For sanity checking:
        # Input: words = ["blue","green","bu"]
        # Output: []

        self.assertEqual(Solution.stringMatching(["blue", "green", "bu"]), [])


if __name__ == "__main__":
    unittest.main()
