import unittest

from Python3.rotateddigits import Solution


class TestrotatedDigits(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: 10
        # Output: 4

        self.assertEqual(Solution.rotatedDigits(10), 4)


if __name__ == "__main__":
    unittest.main()
