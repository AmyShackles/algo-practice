import unittest

from Python3.twosumiiinputarrayissorted import Solution


class TesttwoSum(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: numbers = [2,7,11,15], target = 9
        # Output: [1,2]

        self.assertEqual(Solution.twoSum([2, 7, 11, 15], 9), [1, 2])

    def test_2(self):
        # For sanity checking:
        # Input: numbers = [2,3,4], target = 6
        # Output: [1,3]

        self.assertEqual(Solution.twoSum([2, 3, 4], 6), [1, 3])

    def test_3(self):
        # For sanity checking:
        # Input: numbers = [-1,0], target = -1
        # Output: [1,2]

        self.assertEqual(Solution.twoSum([-1, 0], -1), [1, 2])


if __name__ == "__main__":
    unittest.main()
