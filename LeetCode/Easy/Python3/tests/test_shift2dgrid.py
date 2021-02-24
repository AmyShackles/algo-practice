import unittest

from Python3.shift2dgrid import Solution


class TestshiftGrid(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
        # Output: [[9,1,2],[3,4,5],[6,7,8]]

        self.assertEqual(
            Solution.shiftGrid([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1),
            [[9, 1, 2], [3, 4, 5], [6, 7, 8]],
        )

    def test_2(self):
        # For sanity checking:
        # Input: grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4
        # Output: [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]

        self.assertEqual(
            Solution.shiftGrid(
                [[3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10], [12, 0, 21, 13]], 4
            ),
            [[12, 0, 21, 13], [3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10]],
        )

    def test_3(self):
        # For sanity checking:
        # Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9
        # Output: [[1,2,3],[4,5,6],[7,8,9]]

        self.assertEqual(
            Solution.shiftGrid([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 9),
            [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
        )


if __name__ == "__main__":
    unittest.main()
