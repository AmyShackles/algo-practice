import unittest

from Python3.verifyinganaliendictionary import Solution


class TestisAlienSorted(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
        # Output: true

        self.assertEqual(
            Solution.isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"),
            true,
        )

    def test_2(self):
        # For sanity checking:
        # Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
        # Output: false

        self.assertEqual(
            Solution.isAlienSorted(
                ["word", "world", "row"], "worldabcefghijkmnpqstuvxyz"
            ),
            false,
        )

    def test_3(self):
        # For sanity checking:
        # Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
        # Output: false

        self.assertEqual(
            Solution.isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz"),
            false,
        )


if __name__ == "__main__":
    unittest.main()
