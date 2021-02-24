import unittest

from Python3.reversestringii import Solution


class TestreverseStr(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: s = "abcdefg", k = 2
        # Output: "bacdfeg"

        self.assertEqual(Solution.reverseStr("abcdefg", 2), "bacdfeg")


if __name__ == "__main__":
    unittest.main()
