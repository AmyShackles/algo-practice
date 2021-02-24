import unittest

from Python3.maximumunitsonatruck import Solution


class TestmaximumUnits(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4
        # Output: 8

        self.assertEqual(Solution.maximumUnits([[1, 3], [2, 2], [3, 1]], 4), 8)

    def test_2(self):
        # For sanity checking:
        # Input: boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10
        # Output: 91

        self.assertEqual(
            Solution.maximumUnits([[5, 10], [2, 5], [4, 7], [3, 9]], 10), 91
        )


if __name__ == "__main__":
    unittest.main()
