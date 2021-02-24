import unittest

from Python3.besttimetobuyandsellstock import Solution


class TestmaxProfit(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: prices = [7,1,5,3,6,4]
        # Output: 5

        self.assertEqual(Solution.maxProfit([7, 1, 5, 3, 6, 4]), 5)

    def test_2(self):
        # For sanity checking:
        # Input: prices = [7,6,4,3,1]
        # Output: 0

        self.assertEqual(Solution.maxProfit([7, 6, 4, 3, 1]), 0)


if __name__ == "__main__":
    unittest.main()
