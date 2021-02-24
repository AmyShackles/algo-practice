import unittest

from Python3.consecutivecharacters import Solution


class TestmaxPower(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: s = "leetcode"
        # Output: 2

        self.assertEqual(Solution.maxPower("leetcode"), 2)

    def test_2(self):
        # For sanity checking:
        # Input: s = "abbcccddddeeeeedcba"
        # Output: 5

        self.assertEqual(Solution.maxPower("abbcccddddeeeeedcba"), 5)

    def test_3(self):
        # For sanity checking:
        # Input: s = "triplepillooooow"
        # Output: 5

        self.assertEqual(Solution.maxPower("triplepillooooow"), 5)

    def test_4(self):
        # For sanity checking:
        # Input: s = "hooraaaaaaaaaaay"
        # Output: 11

        self.assertEqual(Solution.maxPower("hooraaaaaaaaaaay"), 11)

    def test_5(self):
        # For sanity checking:
        # Input: s = "tourist"
        # Output: 1

        self.assertEqual(Solution.maxPower("tourist"), 1)


if __name__ == "__main__":
    unittest.main()
