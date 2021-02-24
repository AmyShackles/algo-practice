import unittest

from Python3.excelsheetcolumntitle import Solution


class TestconvertToTitle(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: 1
        # Output: "A"

        self.assertEqual(Solution.convertToTitle(1), "A")

    def test_2(self):
        # For sanity checking:
        # Input: 28
        # Output: "AB"

        self.assertEqual(Solution.convertToTitle(28), "AB")

    def test_3(self):
        # For sanity checking:
        # Input: 701
        # Output: "ZY"

        self.assertEqual(Solution.convertToTitle(701), "ZY")


if __name__ == "__main__":
    unittest.main()
