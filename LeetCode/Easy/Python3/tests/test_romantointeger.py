import unittest

from Python3.romantointeger import Solution


class TestromanToInt(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: s = "III"
        # Output: 3

        self.assertEqual(Solution.romanToInt("III"), 3)

    def test_2(self):
        # For sanity checking:
        # Input: s = "IV"
        # Output: 4

        self.assertEqual(Solution.romanToInt("IV"), 4)

    def test_3(self):
        # For sanity checking:
        # Input: s = "IX"
        # Output: 9

        self.assertEqual(Solution.romanToInt("IX"), 9)

    def test_4(self):
        # For sanity checking:
        # Input: s = "LVIII"
        # Output: 58

        self.assertEqual(Solution.romanToInt("LVIII"), 58)

    def test_5(self):
        # For sanity checking:
        # Input: s = "MCMXCIV"
        # Output: 1994

        self.assertEqual(Solution.romanToInt("MCMXCIV"), 1994)


if __name__ == "__main__":
    unittest.main()
