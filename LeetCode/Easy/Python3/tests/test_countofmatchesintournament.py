import unittest

from Python3.countofmatchesintournament import Solution


class TestnumberOfMatches(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: n = 7
        # Output: 6

        self.assertEqual(Solution.numberOfMatches(7), 6)

    def test_2(self):
        # For sanity checking:
        # Input: n = 14
        # Output: 13

        self.assertEqual(Solution.numberOfMatches(14), 13)


if __name__ == "__main__":
    unittest.main()
