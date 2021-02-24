import unittest

from Python3.countoddnumbersinanintervalrange import Solution


class TestcountOdds(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: low = 3, high = 7
        # Output: 3

        self.assertEqual(Solution.countOdds(3, 7), 3)

    def test_2(self):
        # For sanity checking:
        # Input: low = 8, high = 10
        # Output: 1

        self.assertEqual(Solution.countOdds(8, 10), 1)


if __name__ == "__main__":
    unittest.main()
