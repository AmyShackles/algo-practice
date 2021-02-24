import unittest

from Python3.flippinganimage import Solution


class TestflipAndInvertImage(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: [[1,1,0],[1,0,1],[0,0,0]]
        # Output: [[1,0,0],[0,1,0],[1,1,1]]

        self.assertEqual(
            Solution.flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]),
            [[1, 0, 0], [0, 1, 0], [1, 1, 1]],
        )

    def test_2(self):
        # For sanity checking:
        # Input: [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
        # Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]

        self.assertEqual(
            Solution.flipAndInvertImage(
                [[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]
            ),
            [[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 1, 0]],
        )


if __name__ == "__main__":
    unittest.main()
