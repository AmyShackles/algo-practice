import unittest

from Python3.reversebits import Solution


class TestreverseBits(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: n = 00000010100101000001111010011100
        # Output:    964176192 (00111001011110000010100101000000)

        self.assertEqual(
            Solution.reverseBits(00000010100101000001111010011100),
            964176192(00111001011110000010100101000000),
        )

    def test_2(self):
        # For sanity checking:
        # Input: n = 11111111111111111111111111111101
        # Output:   3221225471 (10111111111111111111111111111111)

        self.assertEqual(
            Solution.reverseBits(11111111111111111111111111111101),
            3221225471(10111111111111111111111111111111),
        )


if __name__ == "__main__":
    unittest.main()
