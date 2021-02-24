import unittest

from Python3.degreeofanarray import Solution


class TestfindShortestSubArray(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums = [1,2,2,3,1]
        # Output: 2

        self.assertEqual(Solution.findShortestSubArray([1, 2, 2, 3, 1]), 2)

    def test_2(self):
        # For sanity checking:
        # Input: nums = [1,2,2,3,1,4,2]
        # Output: 6

        self.assertEqual(Solution.findShortestSubArray([1, 2, 2, 3, 1, 4, 2]), 6)


if __name__ == "__main__":
    unittest.main()
