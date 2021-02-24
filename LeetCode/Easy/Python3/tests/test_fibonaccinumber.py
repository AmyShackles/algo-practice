import unittest

from Python3.fibonaccinumber import Solution


class Testfib(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: n = 2
        # Output: 1

        self.assertEqual(Solution.fib(2), 1)

    def test_2(self):
        # For sanity checking:
        # Input: n = 3
        # Output: 2

        self.assertEqual(Solution.fib(3), 2)

    def test_3(self):
        # For sanity checking:
        # Input: n = 4
        # Output: 3

        self.assertEqual(Solution.fib(4), 3)


if __name__ == "__main__":
    unittest.main()
