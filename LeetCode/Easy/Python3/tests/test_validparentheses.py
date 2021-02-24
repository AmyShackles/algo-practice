import unittest

from Python3.validparentheses import Solution


class TestisValid(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: s = "()"
        # Output: true

        self.assertEqual(Solution.isValid("()"), true)

    def test_2(self):
        # For sanity checking:
        # Input: s = "()[]{}"
        # Output: true

        self.assertEqual(Solution.isValid("()[]{}"), true)

    def test_3(self):
        # For sanity checking:
        # Input: s = "(]"
        # Output: false

        self.assertEqual(Solution.isValid("(]"), false)

    def test_4(self):
        # For sanity checking:
        # Input: s = "([)]"
        # Output: false

        self.assertEqual(Solution.isValid("([)]"), false)

    def test_5(self):
        # For sanity checking:
        # Input: s = "{[]}"
        # Output: true

        self.assertEqual(Solution.isValid("{[]}"), true)


if __name__ == "__main__":
    unittest.main()
