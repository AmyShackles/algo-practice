import unittest

from Python3.sortarraybyincreasingfrequency import Solution


class TestfrequencySort(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums = [1,1,2,2,2,3]
        # Output: [3,1,1,2,2,2]

        self.assertEqual(Solution.frequencySort([1, 1, 2, 2, 2, 3]), [3, 1, 1, 2, 2, 2])

    def test_2(self):
        # For sanity checking:
        # Input: nums = [2,3,1,3,2]
        # Output: [1,3,3,2,2]

        self.assertEqual(Solution.frequencySort([2, 3, 1, 3, 2]), [1, 3, 3, 2, 2])


if __name__ == "__main__":
    unittest.main()
