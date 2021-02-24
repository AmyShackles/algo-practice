import unittest

from Python3.findthedistancevaluebetweentwoarrays import Solution


class TestfindTheDistanceValue(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2
        # Output: 2

        self.assertEqual(Solution.findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2), 2)

    def test_2(self):
        # For sanity checking:
        # Input: arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3
        # Output: 2

        self.assertEqual(
            Solution.findTheDistanceValue([1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3), 2
        )

    def test_3(self):
        # For sanity checking:
        # Input: arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6
        # Output: 1

        self.assertEqual(
            Solution.findTheDistanceValue([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6), 1
        )


if __name__ == "__main__":
    unittest.main()
