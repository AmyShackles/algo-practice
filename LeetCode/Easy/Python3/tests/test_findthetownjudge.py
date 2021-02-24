import unittest

from Python3.findthetownjudge import Solution


class TestfindJudge(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: N = 2, trust = [[1,2]]
        # Output: 2

        self.assertEqual(Solution.findJudge(2, [[1, 2]]), 2)

    def test_2(self):
        # For sanity checking:
        # Input: N = 3, trust = [[1,3],[2,3]]
        # Output: 3

        self.assertEqual(Solution.findJudge(3, [[1, 3], [2, 3]]), 3)

    def test_3(self):
        # For sanity checking:
        # Input: N = 3, trust = [[1,3],[2,3],[3,1]]
        # Output: -1

        self.assertEqual(Solution.findJudge(3, [[1, 3], [2, 3], [3, 1]]), -1)

    def test_4(self):
        # For sanity checking:
        # Input: N = 3, trust = [[1,2],[2,3]]
        # Output: -1

        self.assertEqual(Solution.findJudge(3, [[1, 2], [2, 3]]), -1)

    def test_5(self):
        # For sanity checking:
        # Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
        # Output: 3

        self.assertEqual(
            Solution.findJudge(4, [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]]), 3
        )


if __name__ == "__main__":
    unittest.main()
