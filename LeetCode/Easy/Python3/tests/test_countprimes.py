import unittest

from Python3.countprimes import Solution


class TestcountPrimes(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: n = 10
        # Output: 4

        self.assertEqual(Solution.countPrimes(10), 4)

    def test_2(self):
        # For sanity checking:
        # Input: n = 0
        # Output: 0

        self.assertEqual(Solution.countPrimes(0), 0)

    def test_3(self):
        # For sanity checking:
        # Input: n = 1
        # Output: 0

        self.assertEqual(Solution.countPrimes(1), 0)


if __name__ == "__main__":
    unittest.main()
