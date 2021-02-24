import unittest

from Python3.thousandseparator import Solution


class TestthousandSeparator(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: n = 987
        # Output: "987"

        self.assertEqual(Solution.thousandSeparator(987), "987")

    def test_2(self):
        # For sanity checking:
        # Input: n = 1234
        # Output: "1.234"

        self.assertEqual(Solution.thousandSeparator(1234), "1.234")

    def test_3(self):
        # For sanity checking:
        # Input: n = 123456789
        # Output: "123.456.789"

        self.assertEqual(Solution.thousandSeparator(123456789), "123.456.789")

    def test_4(self):
        # For sanity checking:
        # Input: n = 0
        # Output: "0"

        self.assertEqual(Solution.thousandSeparator(0), "0")


if __name__ == "__main__":
    unittest.main()
