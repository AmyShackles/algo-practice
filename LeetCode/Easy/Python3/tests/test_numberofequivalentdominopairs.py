import unittest

from Python3.numberofequivalentdominopairs import Solution


class TestnumEquivDominoPairs(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]
        # Output: 1

        self.assertEqual(
            Solution.numEquivDominoPairs([[1, 2], [2, 1], [3, 4], [5, 6]]), 1
        )


if __name__ == "__main__":
    unittest.main()
