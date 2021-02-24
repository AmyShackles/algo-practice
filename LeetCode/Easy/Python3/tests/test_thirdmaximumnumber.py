import unittest

from Python3.thirdmaximumnumber import Solution


class TestthirdMax(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums = [3,2,1]
        # Output: 1

        self.assertEqual(Solution.thirdMax([3, 2, 1]), 1)

    def test_2(self):
        # For sanity checking:
        # Input: nums = [1,2]
        # Output: 2

        self.assertEqual(Solution.thirdMax([1, 2]), 2)

    def test_3(self):
        # For sanity checking:
        # Input: nums = [2,2,3,1]
        # Output: 1

        self.assertEqual(Solution.thirdMax([2, 2, 3, 1]), 1)


if __name__ == "__main__":
    unittest.main()
