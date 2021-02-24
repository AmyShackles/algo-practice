import unittest

from Python3.waterbottles import Solution


class TestnumWaterBottles(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: numBottles = 9, numExchange = 3
        # Output: 13

        self.assertEqual(Solution.numWaterBottles(9, 3), 13)

    def test_2(self):
        # For sanity checking:
        # Input: numBottles = 15, numExchange = 4
        # Output: 19

        self.assertEqual(Solution.numWaterBottles(15, 4), 19)

    def test_3(self):
        # For sanity checking:
        # Input: numBottles = 5, numExchange = 5
        # Output: 6

        self.assertEqual(Solution.numWaterBottles(5, 5), 6)

    def test_4(self):
        # For sanity checking:
        # Input: numBottles = 2, numExchange = 3
        # Output: 2

        self.assertEqual(Solution.numWaterBottles(2, 3), 2)


if __name__ == "__main__":
    unittest.main()
