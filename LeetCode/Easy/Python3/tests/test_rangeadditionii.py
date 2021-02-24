import unittest

from Python3.rangeadditionii import Solution


class TestmaxCount(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: m = 3, n = 3, ops = [[2,2],[3,3]]
        # Output: 4

        self.assertEqual(Solution.maxCount(3, 3, [[2, 2], [3, 3]]), 4)

    def test_2(self):
        # For sanity checking:
        # Input: m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]
        # Output: 4

        self.assertEqual(
            Solution.maxCount(
                3,
                3,
                [
                    [2, 2],
                    [3, 3],
                    [3, 3],
                    [3, 3],
                    [2, 2],
                    [3, 3],
                    [3, 3],
                    [3, 3],
                    [2, 2],
                    [3, 3],
                    [3, 3],
                    [3, 3],
                ],
            ),
            4,
        )

    def test_3(self):
        # For sanity checking:
        # Input: m = 3, n = 3, ops = []
        # Output: 9

        self.assertEqual(Solution.maxCount(3, 3, []), 9)


if __name__ == "__main__":
    unittest.main()
