import unittest

from Python3.generateastringwithcharactersthathaveoddcounts import Solution


class TestgenerateTheString(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: n = 4
        # Output: "pppz"

        self.assertEqual(Solution.generateTheString(4), "pppz")

    def test_2(self):
        # For sanity checking:
        # Input: n = 2
        # Output: "xy"

        self.assertEqual(Solution.generateTheString(2), "xy")

    def test_3(self):
        # For sanity checking:
        # Input: n = 7
        # Output: "holasss"

        self.assertEqual(Solution.generateTheString(7), "holasss")


if __name__ == "__main__":
    unittest.main()
