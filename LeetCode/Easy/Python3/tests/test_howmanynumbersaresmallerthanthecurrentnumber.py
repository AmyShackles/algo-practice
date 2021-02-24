import unittest

from Python3.howmanynumbersaresmallerthanthecurrentnumber import Solution


class TestsmallerNumbersThanCurrent(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums = [8,1,2,2,3]
        # Output: [4,0,1,1,3]

        self.assertEqual(
            Solution.smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [4, 0, 1, 1, 3]
        )

    def test_2(self):
        # For sanity checking:
        # Input: nums = [6,5,4,8]
        # Output: [2,1,0,3]

        self.assertEqual(Solution.smallerNumbersThanCurrent([6, 5, 4, 8]), [2, 1, 0, 3])

    def test_3(self):
        # For sanity checking:
        # Input: nums = [7,7,7,7]
        # Output: [0,0,0,0]

        self.assertEqual(Solution.smallerNumbersThanCurrent([7, 7, 7, 7]), [0, 0, 0, 0])


if __name__ == "__main__":
    unittest.main()
