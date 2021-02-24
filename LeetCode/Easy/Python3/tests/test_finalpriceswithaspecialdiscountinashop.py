import unittest

from Python3.finalpriceswithaspecialdiscountinashop import Solution


class TestfinalPrices(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: prices = [8,4,6,2,3]
        # Output: [4,2,4,2,3]

        self.assertEqual(Solution.finalPrices([8, 4, 6, 2, 3]), [4, 2, 4, 2, 3])

    def test_2(self):
        # For sanity checking:
        # Input: prices = [1,2,3,4,5]
        # Output: [1,2,3,4,5]

        self.assertEqual(Solution.finalPrices([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5])

    def test_3(self):
        # For sanity checking:
        # Input: prices = [10,1,1,6]
        # Output: [9,0,1,6]

        self.assertEqual(Solution.finalPrices([10, 1, 1, 6]), [9, 0, 1, 6])


if __name__ == "__main__":
    unittest.main()
