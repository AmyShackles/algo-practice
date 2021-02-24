import unittest

from Python3.binarygap import Solution


class TestbinaryGap(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: n = 22
        # Output: 2

        self.assertEqual(Solution.binaryGap(22), 2)

    def test_2(self):
        # For sanity checking:
        # Input: n = 5
        # Output: 2

        self.assertEqual(Solution.binaryGap(5), 2)

    def test_3(self):
        # For sanity checking:
        # Input: n = 6
        # Output: 1

        self.assertEqual(Solution.binaryGap(6), 1)

    def test_4(self):
        # For sanity checking:
        # Input: n = 8
        # Output: 0

        self.assertEqual(Solution.binaryGap(8), 0)

    def test_5(self):
        # For sanity checking:
        # Input: n = 1
        # Output: 0

        self.assertEqual(Solution.binaryGap(1), 0)


if __name__ == "__main__":
    unittest.main()
