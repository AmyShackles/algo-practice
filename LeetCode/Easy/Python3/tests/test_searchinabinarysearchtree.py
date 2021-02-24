import unittest

from Python3.searchinabinarysearchtree import Solution


class TestsearchBST(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: root = [4,2,7,1,3], val = 2
        # Output: [2,1,3]

        self.assertEqual(Solution.searchBST([4, 2, 7, 1, 3], 2), [2, 1, 3])

    def test_2(self):
        # For sanity checking:
        # Input: root = [4,2,7,1,3], val = 5
        # Output: []

        self.assertEqual(Solution.searchBST([4, 2, 7, 1, 3], 5), [])


if __name__ == "__main__":
    unittest.main()
