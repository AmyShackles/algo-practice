import unittest

from Python3.adddigits import Solution


class TestaddDigits(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: 38
        # Output: 2

        self.assertEqual(Solution.addDigits(38), 2)


if __name__ == "__main__":
    unittest.main()
