import unittest

from Python3.mergesortedarray import Solution


class Testmerge(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
        # Output: [1,2,2,3,5,6]

        self.assertEqual(
            Solution.merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3), [1, 2, 2, 3, 5, 6]
        )

    def test_2(self):
        # For sanity checking:
        # Input: nums1 = [1], m = 1, nums2 = [], n = 0
        # Output: [1]

        self.assertEqual(Solution.merge([1], 1, [], 0), [1])


if __name__ == "__main__":
    unittest.main()
