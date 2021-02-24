import unittest

from Python3.powerofthree import Solution


class TestisPowerOfThree(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: n = 27
        # Output: true

        self.assertEqual(Solution.isPowerOfThree(27), true)

    def test_2(self):
        # For sanity checking:
        # Input: n = 0
        # Output: false

        self.assertEqual(Solution.isPowerOfThree(0), false)

    def test_3(self):
        # For sanity checking:
        # Input: n = 9
        # Output: true

        self.assertEqual(Solution.isPowerOfThree(9), true)

    def test_4(self):
        # For sanity checking:
        # Input: n = 45
        # Output: false

        self.assertEqual(Solution.isPowerOfThree(45), false)


if __name__ == "__main__":
    unittest.main()
