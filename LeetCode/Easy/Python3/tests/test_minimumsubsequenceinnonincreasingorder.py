import unittest

from Python3.minimumsubsequenceinnonincreasingorder import Solution


class TestminSubsequence(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums = [4,3,10,9,8]
        # Output: [10,9]

        self.assertEqual(Solution.minSubsequence([4, 3, 10, 9, 8]), [10, 9])

    def test_2(self):
        # For sanity checking:
        # Input: nums = [4,4,7,6,7]
        # Output: [7,7,6]

        self.assertEqual(Solution.minSubsequence([4, 4, 7, 6, 7]), [7, 7, 6])

    def test_3(self):
        # For sanity checking:
        # Input: nums = [6]
        # Output: [6]

        self.assertEqual(Solution.minSubsequence([6]), [6])


if __name__ == "__main__":
    unittest.main()
