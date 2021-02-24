import unittest

from Python3.decryptstringfromalphabettointegermapping import Solution


class TestfreqAlphabets(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: s = "10#11#12"
        # Output: "jkab"

        self.assertEqual(Solution.freqAlphabets("10#11#12"), "jkab")

    def test_2(self):
        # For sanity checking:
        # Input: s = "1326#"
        # Output: "acz"

        self.assertEqual(Solution.freqAlphabets("1326#"), "acz")

    def test_3(self):
        # For sanity checking:
        # Input: s = "25#"
        # Output: "y"

        self.assertEqual(Solution.freqAlphabets("25#"), "y")

    def test_4(self):
        # For sanity checking:
        # Input: s = "12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"
        # Output: "abcdefghijklmnopqrstuvwxyz"

        self.assertEqual(
            Solution.freqAlphabets(
                "12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"
            ),
            "abcdefghijklmnopqrstuvwxyz",
        )


if __name__ == "__main__":
    unittest.main()
