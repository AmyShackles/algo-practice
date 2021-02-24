import unittest

from Python3.numberof1bits import Solution


class TesthammingWeight(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: n = 00000000000000000000000000001011
        # Output: 3

        self.assertEqual(Solution.hammingWeight(00000000000000000000000000001011), 3)

    def test_2(self):
        # For sanity checking:
        # Input: n = 00000000000000000000000010000000
        # Output: 1

        self.assertEqual(Solution.hammingWeight(00000000000000000000000010000000), 1)

    def test_3(self):
        # For sanity checking:
        # Input: n = 11111111111111111111111111111101
        # Output: 31

        self.assertEqual(Solution.hammingWeight(11111111111111111111111111111101), 31)


if __name__ == "__main__":
    unittest.main()
