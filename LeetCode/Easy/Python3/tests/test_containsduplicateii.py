import unittest

from Python3.containsduplicateii import Solution


class TestcontainsNearbyDuplicate(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums = [1,2,3,1], k = 3
        # Output: true

        self.assertEqual(Solution.containsNearbyDuplicate([1, 2, 3, 1], 3), true)

    def test_2(self):
        # For sanity checking:
        # Input: nums = [1,0,1,1], k = 1
        # Output: true

        self.assertEqual(Solution.containsNearbyDuplicate([1, 0, 1, 1], 1), true)

    def test_3(self):
        # For sanity checking:
        # Input: nums = [1,2,3,1,2,3], k = 2
        # Output: false

        self.assertEqual(Solution.containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2), false)


if __name__ == "__main__":
    unittest.main()
