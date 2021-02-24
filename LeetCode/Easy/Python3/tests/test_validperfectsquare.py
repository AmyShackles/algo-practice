import unittest

from Python3.validperfectsquare import Solution


class TestisPerfectSquare(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: num = 16
        # Output: true

        self.assertEqual(Solution.isPerfectSquare(16), true)

    def test_2(self):
        # For sanity checking:
        # Input: num = 14
        # Output: false

        self.assertEqual(Solution.isPerfectSquare(14), false)


if __name__ == "__main__":
    unittest.main()
