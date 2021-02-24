import unittest

from Python3.subtracttheproductandsumofdigitsofaninteger import Solution


class TestsubtractProductAndSum(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: n = 234
        # Output: 15

        self.assertEqual(Solution.subtractProductAndSum(234), 15)

    def test_2(self):
        # For sanity checking:
        # Input: n = 4421
        # Output: 21

        self.assertEqual(Solution.subtractProductAndSum(4421), 21)


if __name__ == "__main__":
    unittest.main()
