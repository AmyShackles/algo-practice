import unittest

from Python3.issubsequence import Solution


class TestisSubsequence(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: s = "abc", t = "ahbgdc"
        # Output: true

        self.assertEqual(Solution.isSubsequence("abc", "ahbgdc"), true)

    def test_2(self):
        # For sanity checking:
        # Input: s = "axc", t = "ahbgdc"
        # Output: false

        self.assertEqual(Solution.isSubsequence("axc", "ahbgdc"), false)


if __name__ == "__main__":
    unittest.main()
