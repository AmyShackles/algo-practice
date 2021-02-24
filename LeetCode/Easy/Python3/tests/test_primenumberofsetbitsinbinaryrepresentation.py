import unittest

from Python3.primenumberofsetbitsinbinaryrepresentation import Solution


class TestcountPrimeSetBits(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: L = 6, R = 10
        # Output: 4

        self.assertEqual(Solution.countPrimeSetBits(6, 10), 4)

    def test_2(self):
        # For sanity checking:
        # Input: L = 10, R = 15
        # Output: 5

        self.assertEqual(Solution.countPrimeSetBits(10, 15), 5)


if __name__ == "__main__":
    unittest.main()
