import unittest

from Python3.projectionareaof3dshapes import Solution


class TestprojectionArea(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: grid = [[1,2],[3,4]]
        # Output: 17

        self.assertEqual(Solution.projectionArea([[1, 2], [3, 4]]), 17)

    def test_2(self):
        # For sanity checking:
        # Input: grid = [[2]]
        # Output: 5

        self.assertEqual(Solution.projectionArea([[2]]), 5)

    def test_3(self):
        # For sanity checking:
        # Input: grid = [[1,0],[0,2]]
        # Output: 8

        self.assertEqual(Solution.projectionArea([[1, 0], [0, 2]]), 8)

    def test_4(self):
        # For sanity checking:
        # Input: grid = [[1,1,1],[1,0,1],[1,1,1]]
        # Output: 14

        self.assertEqual(Solution.projectionArea([[1, 1, 1], [1, 0, 1], [1, 1, 1]]), 14)

    def test_5(self):
        # For sanity checking:
        # Input: grid = [[2,2,2],[2,1,2],[2,2,2]]
        # Output: 21

        self.assertEqual(Solution.projectionArea([[2, 2, 2], [2, 1, 2], [2, 2, 2]]), 21)


if __name__ == "__main__":
    unittest.main()
