import unittest

from Python3.removeelement import Solution


class TestremoveElement(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums = [3,2,2,3], val = 3
        # Output: 2, nums = [2,2]

        self.assertEqual(Solution.removeElement([3, 2, 2, 3], 3), 2, nums=[2, 2])

    def test_2(self):
        # For sanity checking:
        # Input: nums = [0,1,2,2,3,0,4,2], val = 2
        # Output: 5, nums = [0,1,4,0,3]

        self.assertEqual(
            Solution.removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2), 5, nums=[0, 1, 4, 0, 3]
        )


if __name__ == "__main__":
    unittest.main()
