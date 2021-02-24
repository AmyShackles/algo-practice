import unittest

from Python3.binarynumberwithalternatingbits import Solution


class TesthasAlternatingBits(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: n = 5
        # Output: true

        self.assertEqual(Solution.hasAlternatingBits(5), true)

    def test_2(self):
        # For sanity checking:
        # Input: n = 7
        # Output: false

        self.assertEqual(Solution.hasAlternatingBits(7), false)

    def test_3(self):
        # For sanity checking:
        # Input: n = 11
        # Output: false

        self.assertEqual(Solution.hasAlternatingBits(11), false)

    def test_4(self):
        # For sanity checking:
        # Input: n = 10
        # Output: true

        self.assertEqual(Solution.hasAlternatingBits(10), true)

    def test_5(self):
        # For sanity checking:
        # Input: n = 3
        # Output: false

        self.assertEqual(Solution.hasAlternatingBits(3), false)


if __name__ == "__main__":
    unittest.main()
