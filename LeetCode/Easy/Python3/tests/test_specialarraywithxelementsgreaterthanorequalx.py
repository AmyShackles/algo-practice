import unittest

from Python3.specialarraywithxelementsgreaterthanorequalx import Solution


class TestspecialArray(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums = [3,5]
        # Output: 2

        self.assertEqual(Solution.specialArray([3, 5]), 2)

    def test_2(self):
        # For sanity checking:
        # Input: nums = [0,0]
        # Output: -1

        self.assertEqual(Solution.specialArray([0, 0]), -1)

    def test_3(self):
        # For sanity checking:
        # Input: nums = [0,4,3,0,4]
        # Output: 3

        self.assertEqual(Solution.specialArray([0, 4, 3, 0, 4]), 3)

    def test_4(self):
        # For sanity checking:
        # Input: nums = [3,6,7,7,0]
        # Output: -1

        self.assertEqual(Solution.specialArray([3, 6, 7, 7, 0]), -1)


if __name__ == "__main__":
    unittest.main()
