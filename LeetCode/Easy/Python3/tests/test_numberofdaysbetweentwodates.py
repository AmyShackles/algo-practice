import unittest

from Python3.numberofdaysbetweentwodates import Solution


class TestdaysBetweenDates(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: date1 = "2019-06-29", date2 = "2019-06-30"
        # Output: 1

        self.assertEqual(Solution.daysBetweenDates("2019-06-29", "2019-06-30"), 1)

    def test_2(self):
        # For sanity checking:
        # Input: date1 = "2020-01-15", date2 = "2019-12-31"
        # Output: 15

        self.assertEqual(Solution.daysBetweenDates("2020-01-15", "2019-12-31"), 15)


if __name__ == "__main__":
    unittest.main()
