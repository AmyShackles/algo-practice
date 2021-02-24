import unittest

from Python3.lowestcommonancestorofabinarysearchtree import Solution


class TestlowestCommonAncestor(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
        # Output: 6

        self.assertEqual(
            Solution.lowestCommonAncestor(
                [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 8
            ),
            6,
        )

    def test_2(self):
        # For sanity checking:
        # Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
        # Output: 2

        self.assertEqual(
            Solution.lowestCommonAncestor(
                [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 4
            ),
            2,
        )

    def test_3(self):
        # For sanity checking:
        # Input: root = [2,1], p = 2, q = 1
        # Output: 2

        self.assertEqual(Solution.lowestCommonAncestor([2, 1], 2, 1), 2)


if __name__ == "__main__":
    unittest.main()
