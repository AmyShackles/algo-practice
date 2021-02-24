import unittest

from Python3.maximizesumofarrayafterknegations import Solution


class TestlargestSumAfterKNegations(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: A = [4,2,3], K = 1
        # Output: 5

        self.assertEqual(Solution.largestSumAfterKNegations([4, 2, 3], 1), 5)

    def test_2(self):
        # For sanity checking:
        # Input: A = [3,-1,0,2], K = 3
        # Output: 6

        self.assertEqual(Solution.largestSumAfterKNegations([3, -1, 0, 2], 3), 6)

    def test_3(self):
        # For sanity checking:
        # Input: A = [2,-3,-1,5,-4], K = 2
        # Output: 13

        self.assertEqual(Solution.largestSumAfterKNegations([2, -3, -1, 5, -4], 2), 13)


if __name__ == "__main__":
    unittest.main()
