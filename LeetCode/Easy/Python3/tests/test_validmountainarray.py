import unittest

from Python3.validmountainarray import Solution


class TestvalidMountainArray(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: arr = [2,1]
        # Output: false

        self.assertEqual(Solution.validMountainArray([2, 1]), false)

    def test_2(self):
        # For sanity checking:
        # Input: arr = [3,5,5]
        # Output: false

        self.assertEqual(Solution.validMountainArray([3, 5, 5]), false)

    def test_3(self):
        # For sanity checking:
        # Input: arr = [0,3,2,1]
        # Output: true

        self.assertEqual(Solution.validMountainArray([0, 3, 2, 1]), true)


if __name__ == "__main__":
    unittest.main()
