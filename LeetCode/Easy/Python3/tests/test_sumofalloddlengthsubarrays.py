import unittest

from Python3.sumofalloddlengthsubarrays import Solution


class TestsumOddLengthSubarrays(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: arr = [1,4,2,5,3]
        # Output: 58

        self.assertEqual(Solution.sumOddLengthSubarrays([1, 4, 2, 5, 3]), 58)

    def test_2(self):
        # For sanity checking:
        # Input: arr = [1,2]
        # Output: 3

        self.assertEqual(Solution.sumOddLengthSubarrays([1, 2]), 3)

    def test_3(self):
        # For sanity checking:
        # Input: arr = [10,11,12]
        # Output: 66

        self.assertEqual(Solution.sumOddLengthSubarrays([10, 11, 12]), 66)


if __name__ == "__main__":
    unittest.main()
