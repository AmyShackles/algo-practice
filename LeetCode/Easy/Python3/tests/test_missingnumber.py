import unittest

from Python3.missingnumber import Solution


class TestmissingNumber(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums = [3,0,1]
        # Output: 2

        self.assertEqual(Solution.missingNumber([3, 0, 1]), 2)

    def test_2(self):
        # For sanity checking:
        # Input: nums = [0,1]
        # Output: 2

        self.assertEqual(Solution.missingNumber([0, 1]), 2)

    def test_3(self):
        # For sanity checking:
        # Input: nums = [9,6,4,2,3,5,7,0,1]
        # Output: 8

        self.assertEqual(Solution.missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]), 8)

    def test_4(self):
        # For sanity checking:
        # Input: nums = [0]
        # Output: 1

        self.assertEqual(Solution.missingNumber([0]), 1)


if __name__ == "__main__":
    unittest.main()
