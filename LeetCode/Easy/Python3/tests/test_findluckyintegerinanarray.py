import unittest

from Python3.findluckyintegerinanarray import Solution


class TestfindLucky(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: arr = [2,2,3,4]
        # Output: 2

        self.assertEqual(Solution.findLucky([2, 2, 3, 4]), 2)

    def test_2(self):
        # For sanity checking:
        # Input: arr = [1,2,2,3,3,3]
        # Output: 3

        self.assertEqual(Solution.findLucky([1, 2, 2, 3, 3, 3]), 3)

    def test_3(self):
        # For sanity checking:
        # Input: arr = [2,2,2,3,3]
        # Output: -1

        self.assertEqual(Solution.findLucky([2, 2, 2, 3, 3]), -1)

    def test_4(self):
        # For sanity checking:
        # Input: arr = [5]
        # Output: -1

        self.assertEqual(Solution.findLucky([5]), -1)

    def test_5(self):
        # For sanity checking:
        # Input: arr = [7,7,7,7,7,7,7]
        # Output: 7

        self.assertEqual(Solution.findLucky([7, 7, 7, 7, 7, 7, 7]), 7)


if __name__ == "__main__":
    unittest.main()
