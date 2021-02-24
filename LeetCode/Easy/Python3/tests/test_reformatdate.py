import unittest

from Python3.reformatdate import Solution


class TestreformatDate(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: date = "20th Oct 2052"
        # Output: "2052-10-20"

        self.assertEqual(Solution.reformatDate("20th Oct 2052"), "2052-10-20")

    def test_2(self):
        # For sanity checking:
        # Input: date = "6th Jun 1933"
        # Output: "1933-06-06"

        self.assertEqual(Solution.reformatDate("6th Jun 1933"), "1933-06-06")

    def test_3(self):
        # For sanity checking:
        # Input: date = "26th May 1960"
        # Output: "1960-05-26"

        self.assertEqual(Solution.reformatDate("26th May 1960"), "1960-05-26")


if __name__ == "__main__":
    unittest.main()
