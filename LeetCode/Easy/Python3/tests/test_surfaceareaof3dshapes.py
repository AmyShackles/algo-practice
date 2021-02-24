import unittest

from Python3.surfaceareaof3dshapes import Solution


class TestsurfaceArea(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: grid = [[2]]
        # Output: 10

        self.assertEqual(Solution.surfaceArea([[2]]), 10)

    def test_2(self):
        # For sanity checking:
        # Input: grid = [[1,2],[3,4]]
        # Output: 34

        self.assertEqual(Solution.surfaceArea([[1, 2], [3, 4]]), 34)

    def test_3(self):
        # For sanity checking:
        # Input: grid = [[1,0],[0,2]]
        # Output: 16

        self.assertEqual(Solution.surfaceArea([[1, 0], [0, 2]]), 16)

    def test_4(self):
        # For sanity checking:
        # Input: grid = [[1,1,1],[1,0,1],[1,1,1]]
        # Output: 32

        self.assertEqual(Solution.surfaceArea([[1, 1, 1], [1, 0, 1], [1, 1, 1]]), 32)

    def test_5(self):
        # For sanity checking:
        # Input: grid = [[2,2,2],[2,1,2],[2,2,2]]
        # Output: 46

        self.assertEqual(Solution.surfaceArea([[2, 2, 2], [2, 1, 2], [2, 2, 2]]), 46)


if __name__ == "__main__":
    unittest.main()
