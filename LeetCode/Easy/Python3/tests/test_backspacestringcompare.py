import unittest

from Python3.backspacestringcompare import Solution


class TestbackspaceCompare(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: S = "ab#c", T = "ad#c"
        # Output: true

        self.assertEqual(Solution.backspaceCompare("ab#c", "ad#c"), true)

    def test_2(self):
        # For sanity checking:
        # Input: S = "ab##", T = "c#d#"
        # Output: true

        self.assertEqual(Solution.backspaceCompare("ab##", "c#d#"), true)

    def test_3(self):
        # For sanity checking:
        # Input: S = "a##c", T = "#a#c"
        # Output: true

        self.assertEqual(Solution.backspaceCompare("a##c", "#a#c"), true)

    def test_4(self):
        # For sanity checking:
        # Input: S = "a#c", T = "b"
        # Output: false

        self.assertEqual(Solution.backspaceCompare("a#c", "b"), false)


if __name__ == "__main__":
    unittest.main()
