import unittest

from Python3.sumofuniqueelements import Solution


class TestsumOfUnique(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums = [1,2,3,2]
        # Output: 4

        self.assertEqual(Solution.sumOfUnique([1, 2, 3, 2]), 4)

    def test_2(self):
        # For sanity checking:
        # Input: nums = [1,1,1,1,1]
        # Output: 0

        self.assertEqual(Solution.sumOfUnique([1, 1, 1, 1, 1]), 0)

    def test_3(self):
        # For sanity checking:
        # Input: nums = [1,2,3,4,5]
        # Output: 15

        self.assertEqual(Solution.sumOfUnique([1, 2, 3, 4, 5]), 15)


if __name__ == "__main__":
    unittest.main()
