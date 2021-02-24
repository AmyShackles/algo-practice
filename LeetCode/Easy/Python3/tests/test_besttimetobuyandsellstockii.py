import unittest

from Python3.besttimetobuyandsellstockii import Solution


class TestmaxProfit(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: prices = [7,1,5,3,6,4]
        # Output: 7

        self.assertEqual(Solution.maxProfit([7, 1, 5, 3, 6, 4]), 7)

    def test_2(self):
        # For sanity checking:
        # Input: prices = [1,2,3,4,5]
        # Output: 4

        self.assertEqual(Solution.maxProfit([1, 2, 3, 4, 5]), 4)

    def test_3(self):
        # For sanity checking:
        # Input: prices = [7,6,4,3,1]
        # Output: 0

        self.assertEqual(Solution.maxProfit([7, 6, 4, 3, 1]), 0)


if __name__ == "__main__":
    unittest.main()
