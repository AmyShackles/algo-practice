import unittest

from Python3.dayoftheyear import Solution


class TestdayOfYear(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: date = "2019-01-09"
        # Output: 9

        self.assertEqual(Solution.dayOfYear("2019-01-09"), 9)

    def test_2(self):
        # For sanity checking:
        # Input: date = "2019-02-10"
        # Output: 41

        self.assertEqual(Solution.dayOfYear("2019-02-10"), 41)

    def test_3(self):
        # For sanity checking:
        # Input: date = "2003-03-01"
        # Output: 60

        self.assertEqual(Solution.dayOfYear("2003-03-01"), 60)

    def test_4(self):
        # For sanity checking:
        # Input: date = "2004-03-01"
        # Output: 61

        self.assertEqual(Solution.dayOfYear("2004-03-01"), 61)


if __name__ == "__main__":
    unittest.main()
