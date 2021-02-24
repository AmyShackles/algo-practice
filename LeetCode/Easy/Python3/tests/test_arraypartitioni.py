import unittest

from Python3.arraypartitioni import Solution


class TestarrayPairSum(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums = [1,4,3,2]
        # Output: 4

        self.assertEqual(Solution.arrayPairSum([1, 4, 3, 2]), 4)

    def test_2(self):
        # For sanity checking:
        # Input: nums = [6,2,6,5,1,2]
        # Output: 9

        self.assertEqual(Solution.arrayPairSum([6, 2, 6, 5, 1, 2]), 9)


if __name__ == "__main__":
    unittest.main()
