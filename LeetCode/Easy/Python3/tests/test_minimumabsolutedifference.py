import unittest

from Python3.minimumabsolutedifference import Solution


class TestminimumAbsDifference(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: arr = [4,2,1,3]
        # Output: [[1,2],[2,3],[3,4]]

        self.assertEqual(
            Solution.minimumAbsDifference([4, 2, 1, 3]), [[1, 2], [2, 3], [3, 4]]
        )

    def test_2(self):
        # For sanity checking:
        # Input: arr = [1,3,6,10,15]
        # Output: [[1,3]]

        self.assertEqual(Solution.minimumAbsDifference([1, 3, 6, 10, 15]), [[1, 3]])

    def test_3(self):
        # For sanity checking:
        # Input: arr = [3,8,-10,23,19,-4,-14,27]
        # Output: [[-14,-10],[19,23],[23,27]]

        self.assertEqual(
            Solution.minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]),
            [[-14, -10], [19, 23], [23, 27]],
        )


if __name__ == "__main__":
    unittest.main()
