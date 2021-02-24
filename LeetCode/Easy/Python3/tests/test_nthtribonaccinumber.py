import unittest

from Python3.nthtribonaccinumber import Solution


class Testtribonacci(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: n = 4
        # Output: 4

        self.assertEqual(Solution.tribonacci(4), 4)

    def test_2(self):
        # For sanity checking:
        # Input: n = 25
        # Output: 1389537

        self.assertEqual(Solution.tribonacci(25), 1389537)


if __name__ == "__main__":
    unittest.main()
