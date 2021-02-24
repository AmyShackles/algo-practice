import unittest

from Python3.singlenumber import Solution


class TestsingleNumber(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums = [2,2,1]
        # Output: 1

        self.assertEqual(Solution.singleNumber([2, 2, 1]), 1)

    def test_2(self):
        # For sanity checking:
        # Input: nums = [4,1,2,1,2]
        # Output: 4

        self.assertEqual(Solution.singleNumber([4, 1, 2, 1, 2]), 4)

    def test_3(self):
        # For sanity checking:
        # Input: nums = [1]
        # Output: 1

        self.assertEqual(Solution.singleNumber([1]), 1)


if __name__ == "__main__":
    unittest.main()
