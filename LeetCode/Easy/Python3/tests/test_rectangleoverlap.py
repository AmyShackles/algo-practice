import unittest

from Python3.rectangleoverlap import Solution


class TestisRectangleOverlap(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: rec1 = [0,0,2,2], rec2 = [1,1,3,3]
        # Output: true

        self.assertEqual(Solution.isRectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3]), true)

    def test_2(self):
        # For sanity checking:
        # Input: rec1 = [0,0,1,1], rec2 = [1,0,2,1]
        # Output: false

        self.assertEqual(Solution.isRectangleOverlap([0, 0, 1, 1], [1, 0, 2, 1]), false)

    def test_3(self):
        # For sanity checking:
        # Input: rec1 = [0,0,1,1], rec2 = [2,2,3,3]
        # Output: false

        self.assertEqual(Solution.isRectangleOverlap([0, 0, 1, 1], [2, 2, 3, 3]), false)


if __name__ == "__main__":
    unittest.main()
