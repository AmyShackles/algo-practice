import unittest

from Python3.dayoftheweek import Solution


class TestdayOfTheWeek(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: day = 31, month = 8, year = 2019
        # Output: "Saturday"

        self.assertEqual(Solution.dayOfTheWeek(31, 8, 2019), "Saturday")

    def test_2(self):
        # For sanity checking:
        # Input: day = 18, month = 7, year = 1999
        # Output: "Sunday"

        self.assertEqual(Solution.dayOfTheWeek(18, 7, 1999), "Sunday")

    def test_3(self):
        # For sanity checking:
        # Input: day = 15, month = 8, year = 1993
        # Output: "Sunday"

        self.assertEqual(Solution.dayOfTheWeek(15, 8, 1993), "Sunday")


if __name__ == "__main__":
    unittest.main()
