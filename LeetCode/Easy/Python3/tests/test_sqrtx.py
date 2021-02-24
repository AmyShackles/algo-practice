import unittest

from Python3.sqrtx import Solution


class TestmySqrt(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: x = 4
        # Output: 2

        self.assertEqual(Solution.mySqrt(4), 2)

    def test_2(self):
        # For sanity checking:
        # Input: x = 8
        # Output: 2

        self.assertEqual(Solution.mySqrt(8), 2)


if __name__ == "__main__":
    unittest.main()
