import unittest

from Python3.checkifitisastraightline import Solution


class TestcheckStraightLine(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
        # Output: true

        self.assertEqual(
            Solution.checkStraightLine(
                [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]
            ),
            true,
        )

    def test_2(self):
        # For sanity checking:
        # Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
        # Output: false

        self.assertEqual(
            Solution.checkStraightLine(
                [[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]]
            ),
            false,
        )


if __name__ == "__main__":
    unittest.main()
