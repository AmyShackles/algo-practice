import unittest

from Python3.reversewordsinastringiii import Solution


class TestreverseWords(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: "Let's take LeetCode contest"
        # Output: "s'teL ekat edoCteeL tsetnoc"

        self.assertEqual(
            Solution.reverseWords("Let's take LeetCode contest"),
            "s'teL ekat edoCteeL tsetnoc",
        )


if __name__ == "__main__":
    unittest.main()
