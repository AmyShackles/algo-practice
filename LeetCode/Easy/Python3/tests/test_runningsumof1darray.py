import unittest

from Python3.runningsumof1darray import Solution


class TestrunningSum(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums = [1,2,3,4]
        # Output: [1,3,6,10]

        self.assertEqual(Solution.runningSum([1, 2, 3, 4]), [1, 3, 6, 10])

    def test_2(self):
        # For sanity checking:
        # Input: nums = [1,1,1,1,1]
        # Output: [1,2,3,4,5]

        self.assertEqual(Solution.runningSum([1, 1, 1, 1, 1]), [1, 2, 3, 4, 5])

    def test_3(self):
        # For sanity checking:
        # Input: nums = [3,1,2,10,1]
        # Output: [3,4,6,16,17]

        self.assertEqual(Solution.runningSum([3, 1, 2, 10, 1]), [3, 4, 6, 16, 17])


if __name__ == "__main__":
    unittest.main()
