import unittest

from Python3.removeduplicatesfromsortedarray import Solution


class TestremoveDuplicates(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums = [1,1,2]
        # Output: 2, nums = [1,2]

        self.assertEqual(Solution.removeDuplicates([1, 1, 2]), 2, nums=[1, 2])

    def test_2(self):
        # For sanity checking:
        # Input: nums = [0,0,1,1,1,2,2,3,3,4]
        # Output: 5, nums = [0,1,2,3,4]

        self.assertEqual(
            Solution.removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]),
            5,
            nums=[0, 1, 2, 3, 4],
        )


if __name__ == "__main__":
    unittest.main()
