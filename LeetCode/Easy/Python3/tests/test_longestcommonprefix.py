import unittest

from Python3.longestcommonprefix import Solution


class TestlongestCommonPrefix(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: strs = ["flower","flow","flight"]
        # Output: "fl"

        self.assertEqual(
            Solution.longestCommonPrefix(["flower", "flow", "flight"]), "fl"
        )

    def test_2(self):
        # For sanity checking:
        # Input: strs = ["dog","racecar","car"]
        # Output: ""

        self.assertEqual(Solution.longestCommonPrefix(["dog", "racecar", "car"]), "")


if __name__ == "__main__":
    unittest.main()
