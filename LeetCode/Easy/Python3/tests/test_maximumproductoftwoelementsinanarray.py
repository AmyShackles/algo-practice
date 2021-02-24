import unittest

from Python3.maximumproductoftwoelementsinanarray import Solution


class TestmaxProduct(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums = [3,4,5,2]
        # Output: 12

        self.assertEqual(Solution.maxProduct([3, 4, 5, 2]), 12)

    def test_2(self):
        # For sanity checking:
        # Input: nums = [1,5,4,5]
        # Output: 16

        self.assertEqual(Solution.maxProduct([1, 5, 4, 5]), 16)

    def test_3(self):
        # For sanity checking:
        # Input: nums = [3,7]
        # Output: 12

        self.assertEqual(Solution.maxProduct([3, 7]), 12)


if __name__ == "__main__":
    unittest.main()
