import unittest

from Python3.uncommonwordsfromtwosentences import Solution


class TestuncommonFromSentences(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: A = "this apple is sweet", B = "this apple is sour"
        # Output: ["sweet","sour"]

        self.assertEqual(
            Solution.uncommonFromSentences("this apple is sweet", "this apple is sour"),
            ["sweet", "sour"],
        )

    def test_2(self):
        # For sanity checking:
        # Input: A = "apple apple", B = "banana"
        # Output: ["banana"]

        self.assertEqual(
            Solution.uncommonFromSentences("apple apple", "banana"), ["banana"]
        )


if __name__ == "__main__":
    unittest.main()
