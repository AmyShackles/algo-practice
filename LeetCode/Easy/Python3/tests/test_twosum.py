import unittest

from Python3.twosum import Solution


class TesttwoSum(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums = [2,7,11,15], target = 9
        # Output: [0,1]

        self.assertEqual(Solution.twoSum([2, 7, 11, 15], 9), [0, 1])

    def test_2(self):
        # For sanity checking:
        # Input: nums = [3,2,4], target = 6
        # Output: [1,2]

        self.assertEqual(Solution.twoSum([3, 2, 4], 6), [1, 2])

    def test_3(self):
        # For sanity checking:
        # Input: nums = [3,3], target = 6
        # Output: [0,1]

        self.assertEqual(Solution.twoSum([3, 3], 6), [0, 1])


if __name__ == "__main__":
    unittest.main()
