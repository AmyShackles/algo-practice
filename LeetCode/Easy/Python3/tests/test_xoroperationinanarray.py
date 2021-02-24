import unittest

from Python3.xoroperationinanarray import Solution


class TestxorOperation(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: n = 5, start = 0
        # Output: 8

        self.assertEqual(Solution.xorOperation(5, 0), 8)

    def test_2(self):
        # For sanity checking:
        # Input: n = 4, start = 3
        # Output: 8

        self.assertEqual(Solution.xorOperation(4, 3), 8)

    def test_3(self):
        # For sanity checking:
        # Input: n = 1, start = 7
        # Output: 7

        self.assertEqual(Solution.xorOperation(1, 7), 7)

    def test_4(self):
        # For sanity checking:
        # Input: n = 10, start = 5
        # Output: 2

        self.assertEqual(Solution.xorOperation(10, 5), 2)


if __name__ == "__main__":
    unittest.main()
