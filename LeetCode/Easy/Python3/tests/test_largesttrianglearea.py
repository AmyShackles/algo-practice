import unittest

from Python3.largesttrianglearea import Solution


class TestlargestTriangleArea(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
        # Output: 2

        self.assertEqual(
            Solution.largestTriangleArea([[0, 0], [0, 1], [1, 0], [0, 2], [2, 0]]), 2
        )


if __name__ == "__main__":
    unittest.main()
