import unittest

from Python3.minimumtimevisitingallpoints import Solution


class TestminTimeToVisitAllPoints(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: points = [[1,1],[3,4],[-1,0]]
        # Output: 7

        self.assertEqual(Solution.minTimeToVisitAllPoints([[1, 1], [3, 4], [-1, 0]]), 7)

    def test_2(self):
        # For sanity checking:
        # Input: points = [[3,2],[-2,2]]
        # Output: 5

        self.assertEqual(Solution.minTimeToVisitAllPoints([[3, 2], [-2, 2]]), 5)


if __name__ == "__main__":
    unittest.main()
