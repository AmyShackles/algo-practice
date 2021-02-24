import unittest

from Python3.maximumaveragesubarrayi import Solution


class TestfindMaxAverage(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: [1,12,-5,-6,50,3], k = 4
        # Output: 12.75

        self.assertEqual(Solution.findMaxAverage([1, 12, -5, -6, 50, 3], 4), 12.75)


if __name__ == "__main__":
    unittest.main()
