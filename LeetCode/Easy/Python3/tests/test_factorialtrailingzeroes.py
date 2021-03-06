import unittest

from Python3.factorialtrailingzeroes import Solution


class TesttrailingZeroes(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: n = 3
        # Output: 0

        self.assertEqual(Solution.trailingZeroes(3), 0)

    def test_2(self):
        # For sanity checking:
        # Input: n = 5
        # Output: 1

        self.assertEqual(Solution.trailingZeroes(5), 1)

    def test_3(self):
        # For sanity checking:
        # Input: n = 0
        # Output: 0

        self.assertEqual(Solution.trailingZeroes(0), 0)


if __name__ == "__main__":
    unittest.main()
