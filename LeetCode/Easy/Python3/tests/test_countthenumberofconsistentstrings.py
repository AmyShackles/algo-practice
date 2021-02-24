import unittest

from Python3.countthenumberofconsistentstrings import Solution


class TestcountConsistentStrings(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
        # Output: 2

        self.assertEqual(
            Solution.countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]),
            2,
        )

    def test_2(self):
        # For sanity checking:
        # Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
        # Output: 7

        self.assertEqual(
            Solution.countConsistentStrings(
                "abc", ["a", "b", "c", "ab", "ac", "bc", "abc"]
            ),
            7,
        )

    def test_3(self):
        # For sanity checking:
        # Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
        # Output: 4

        self.assertEqual(
            Solution.countConsistentStrings(
                "cad", ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"]
            ),
            4,
        )


if __name__ == "__main__":
    unittest.main()
