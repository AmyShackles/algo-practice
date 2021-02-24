import unittest

from Python3.poweroftwo import Solution


class TestisPowerOfTwo(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: n = 1
        # Output: true

        self.assertEqual(Solution.isPowerOfTwo(1), true)

    def test_2(self):
        # For sanity checking:
        # Input: n = 16
        # Output: true

        self.assertEqual(Solution.isPowerOfTwo(16), true)

    def test_3(self):
        # For sanity checking:
        # Input: n = 3
        # Output: false

        self.assertEqual(Solution.isPowerOfTwo(3), false)

    def test_4(self):
        # For sanity checking:
        # Input: n = 4
        # Output: true

        self.assertEqual(Solution.isPowerOfTwo(4), true)

    def test_5(self):
        # For sanity checking:
        # Input: n = 5
        # Output: false

        self.assertEqual(Solution.isPowerOfTwo(5), false)


if __name__ == "__main__":
    unittest.main()
