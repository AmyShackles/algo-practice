import unittest

from Python3.countnegativenumbersinasortedmatrix import Solution


class TestcountNegatives(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
        # Output: 8

        self.assertEqual(
            Solution.countNegatives(
                [[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]
            ),
            8,
        )

    def test_2(self):
        # For sanity checking:
        # Input: grid = [[3,2],[1,0]]
        # Output: 0

        self.assertEqual(Solution.countNegatives([[3, 2], [1, 0]]), 0)

    def test_3(self):
        # For sanity checking:
        # Input: grid = [[1,-1],[-1,-1]]
        # Output: 3

        self.assertEqual(Solution.countNegatives([[1, -1], [-1, -1]]), 3)

    def test_4(self):
        # For sanity checking:
        # Input: grid = [[-1]]
        # Output: 1

        self.assertEqual(Solution.countNegatives([[-1]]), 1)


if __name__ == "__main__":
    unittest.main()
