import unittest

from Python3.islandperimeter import Solution


class TestislandPerimeter(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
        # Output: 16

        self.assertEqual(
            Solution.islandPerimeter(
                [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]
            ),
            16,
        )

    def test_2(self):
        # For sanity checking:
        # Input: grid = [[1]]
        # Output: 4

        self.assertEqual(Solution.islandPerimeter([[1]]), 4)

    def test_3(self):
        # For sanity checking:
        # Input: grid = [[1,0]]
        # Output: 4

        self.assertEqual(Solution.islandPerimeter([[1, 0]]), 4)


if __name__ == "__main__":
    unittest.main()
