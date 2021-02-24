import unittest

from Python3.maximumsubarray import Solution


class TestmaxSubArray(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
        # Output: 6

        self.assertEqual(Solution.maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6)

    def test_2(self):
        # For sanity checking:
        # Input: nums = [1]
        # Output: 1

        self.assertEqual(Solution.maxSubArray([1]), 1)

    def test_3(self):
        # For sanity checking:
        # Input: nums = [0]
        # Output: 0

        self.assertEqual(Solution.maxSubArray([0]), 0)

    def test_4(self):
        # For sanity checking:
        # Input: nums = [-1]
        # Output: -1

        self.assertEqual(Solution.maxSubArray([-1]), -1)

    def test_5(self):
        # For sanity checking:
        # Input: nums = [-100000]
        # Output: -100000

        self.assertEqual(Solution.maxSubArray([-100000]), -100000)


if __name__ == "__main__":
    unittest.main()
