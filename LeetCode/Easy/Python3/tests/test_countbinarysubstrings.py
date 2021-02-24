import unittest

from Python3.countbinarysubstrings import Solution


class TestcountBinarySubstrings(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: "00110011"
        # Output: 6

        self.assertEqual(Solution.countBinarySubstrings("00110011"), 6)

    def test_2(self):
        # For sanity checking:
        # Input: "10101"
        # Output: 4

        self.assertEqual(Solution.countBinarySubstrings("10101"), 4)


if __name__ == "__main__":
    unittest.main()
