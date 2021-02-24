import unittest

from Python3.poweroffour import Solution


class TestisPowerOfFour(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: n = 16
        # Output: true

        self.assertEqual(Solution.isPowerOfFour(16), true)

    def test_2(self):
        # For sanity checking:
        # Input: n = 5
        # Output: false

        self.assertEqual(Solution.isPowerOfFour(5), false)

    def test_3(self):
        # For sanity checking:
        # Input: n = 1
        # Output: true

        self.assertEqual(Solution.isPowerOfFour(1), true)


if __name__ == "__main__":
    unittest.main()
