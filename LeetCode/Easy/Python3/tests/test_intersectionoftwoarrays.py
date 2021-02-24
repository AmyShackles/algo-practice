import unittest

from Python3.intersectionoftwoarrays import Solution


class Testintersection(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums1 = [1,2,2,1], nums2 = [2,2]
        # Output: [2]

        self.assertEqual(Solution.intersection([1, 2, 2, 1], [2, 2]), [2])


if __name__ == "__main__":
    unittest.main()
