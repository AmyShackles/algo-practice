import unittest

from Python3.convertintegertothesumoftwonozerointegers import Solution


class TestgetNoZeroIntegers(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: n = 2
        # Output: [1,1]

        self.assertEqual(Solution.getNoZeroIntegers(2), [1, 1])

    def test_2(self):
        # For sanity checking:
        # Input: n = 11
        # Output: [2,9]

        self.assertEqual(Solution.getNoZeroIntegers(11), [2, 9])

    def test_3(self):
        # For sanity checking:
        # Input: n = 10000
        # Output: [1,9999]

        self.assertEqual(Solution.getNoZeroIntegers(10000), [1, 9999])

    def test_4(self):
        # For sanity checking:
        # Input: n = 69
        # Output: [1,68]

        self.assertEqual(Solution.getNoZeroIntegers(69), [1, 68])

    def test_5(self):
        # For sanity checking:
        # Input: n = 1010
        # Output: [11,999]

        self.assertEqual(Solution.getNoZeroIntegers(1010), [11, 999])


if __name__ == "__main__":
    unittest.main()
