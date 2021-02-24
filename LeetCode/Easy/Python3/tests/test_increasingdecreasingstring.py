import unittest

from Python3.increasingdecreasingstring import Solution


class TestsortString(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: s = "aaaabbbbcccc"
        # Output: "abccbaabccba"

        self.assertEqual(Solution.sortString("aaaabbbbcccc"), "abccbaabccba")

    def test_2(self):
        # For sanity checking:
        # Input: s = "rat"
        # Output: "art"

        self.assertEqual(Solution.sortString("rat"), "art")

    def test_3(self):
        # For sanity checking:
        # Input: s = "leetcode"
        # Output: "cdelotee"

        self.assertEqual(Solution.sortString("leetcode"), "cdelotee")

    def test_4(self):
        # For sanity checking:
        # Input: s = "ggggggg"
        # Output: "ggggggg"

        self.assertEqual(Solution.sortString("ggggggg"), "ggggggg")

    def test_5(self):
        # For sanity checking:
        # Input: s = "spo"
        # Output: "ops"

        self.assertEqual(Solution.sortString("spo"), "ops")


if __name__ == "__main__":
    unittest.main()
