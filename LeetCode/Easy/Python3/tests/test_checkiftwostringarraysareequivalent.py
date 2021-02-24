import unittest

from Python3.checkiftwostringarraysareequivalent import Solution


class TestarrayStringsAreEqual(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
        # Output: true

        self.assertEqual(Solution.arrayStringsAreEqual(["ab", "c"], ["a", "bc"]), true)

    def test_2(self):
        # For sanity checking:
        # Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
        # Output: false

        self.assertEqual(Solution.arrayStringsAreEqual(["a", "cb"], ["ab", "c"]), false)

    def test_3(self):
        # For sanity checking:
        # Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
        # Output: true

        self.assertEqual(
            Solution.arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]), true
        )


if __name__ == "__main__":
    unittest.main()
