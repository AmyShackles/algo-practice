import unittest

from Python3.makethestringgreat import Solution


class TestmakeGood(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: s = "leEeetcode"
        # Output: "leetcode"

        self.assertEqual(Solution.makeGood("leEeetcode"), "leetcode")

    def test_2(self):
        # For sanity checking:
        # Input: s = "abBAcC"
        # Output: ""

        self.assertEqual(Solution.makeGood("abBAcC"), "")

    def test_3(self):
        # For sanity checking:
        # Input: s = "s"
        # Output: "s"

        self.assertEqual(Solution.makeGood("s"), "s")


if __name__ == "__main__":
    unittest.main()
