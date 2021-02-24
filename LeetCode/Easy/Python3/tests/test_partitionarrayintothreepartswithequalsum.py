import unittest

from Python3.partitionarrayintothreepartswithequalsum import Solution


class TestcanThreePartsEqualSum(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: arr = [0,2,1,-6,6,-7,9,1,2,0,1]
        # Output: true

        self.assertEqual(
            Solution.canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]), true
        )

    def test_2(self):
        # For sanity checking:
        # Input: arr = [0,2,1,-6,6,7,9,-1,2,0,1]
        # Output: false

        self.assertEqual(
            Solution.canThreePartsEqualSum([0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1]), false
        )

    def test_3(self):
        # For sanity checking:
        # Input: arr = [3,3,6,5,-2,2,5,1,-9,4]
        # Output: true

        self.assertEqual(
            Solution.canThreePartsEqualSum([3, 3, 6, 5, -2, 2, 5, 1, -9, 4]), true
        )


if __name__ == "__main__":
    unittest.main()
