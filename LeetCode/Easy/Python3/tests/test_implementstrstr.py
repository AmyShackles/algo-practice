import unittest

from Python3.implementstrstr import Solution


class TeststrStr(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: haystack = "hello", needle = "ll"
        # Output: 2

        self.assertEqual(Solution.strStr("hello", "ll"), 2)

    def test_2(self):
        # For sanity checking:
        # Input: haystack = "aaaaa", needle = "bba"
        # Output: -1

        self.assertEqual(Solution.strStr("aaaaa", "bba"), -1)

    def test_3(self):
        # For sanity checking:
        # Input: haystack = "", needle = ""
        # Output: 0

        self.assertEqual(Solution.strStr("", ""), 0)


if __name__ == "__main__":
    unittest.main()
