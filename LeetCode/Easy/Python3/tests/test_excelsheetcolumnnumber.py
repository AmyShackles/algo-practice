import unittest

from Python3.excelsheetcolumnnumber import Solution


class TesttitleToNumber(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: "A"
        # Output: 1

        self.assertEqual(Solution.titleToNumber("A"), 1)

    def test_2(self):
        # For sanity checking:
        # Input: "AB"
        # Output: 28

        self.assertEqual(Solution.titleToNumber("AB"), 28)

    def test_3(self):
        # For sanity checking:
        # Input: "ZY"
        # Output: 701

        self.assertEqual(Solution.titleToNumber("ZY"), 701)


if __name__ == "__main__":
    unittest.main()
