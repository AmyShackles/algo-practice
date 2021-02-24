import unittest

from Python3.findnumberswithevennumberofdigits import Solution


class TestfindNumbers(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums = [12,345,2,6,7896]
        # Output: 2

        self.assertEqual(Solution.findNumbers([12, 345, 2, 6, 7896]), 2)

    def test_2(self):
        # For sanity checking:
        # Input: nums = [555,901,482,1771]
        # Output: 1

        self.assertEqual(Solution.findNumbers([555, 901, 482, 1771]), 1)


if __name__ == "__main__":
    unittest.main()
