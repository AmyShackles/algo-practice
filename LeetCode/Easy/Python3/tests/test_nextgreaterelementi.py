import unittest

from Python3.nextgreaterelementi import Solution


class TestnextGreaterElement(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
        # Output: [-1,3,-1]

        self.assertEqual(
            Solution.nextGreaterElement([4, 1, 2], [1, 3, 4, 2]), [-1, 3, -1]
        )

    def test_2(self):
        # For sanity checking:
        # Input: nums1 = [2,4], nums2 = [1,2,3,4]
        # Output: [3,-1]

        self.assertEqual(Solution.nextGreaterElement([2, 4], [1, 2, 3, 4]), [3, -1])


if __name__ == "__main__":
    unittest.main()
