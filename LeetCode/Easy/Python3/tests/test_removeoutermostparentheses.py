import unittest

from Python3.removeoutermostparentheses import Solution


class TestremoveOuterParentheses(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: "(()())(())"
        # Output: "()()()"

        self.assertEqual(Solution.removeOuterParentheses("(()())(())"), "()()()")

    def test_2(self):
        # For sanity checking:
        # Input: "(()())(())(()(()))"
        # Output: "()()()()(())"

        self.assertEqual(
            Solution.removeOuterParentheses("(()())(())(()(()))"), "()()()()(())"
        )

    def test_3(self):
        # For sanity checking:
        # Input: "()()"
        # Output: ""

        self.assertEqual(Solution.removeOuterParentheses("()()"), "")


if __name__ == "__main__":
    unittest.main()
