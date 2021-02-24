import unittest

from Python3.increasingordersearchtree import Solution


class TestincreasingBST(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
        # Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

        self.assertEqual(
            Solution.increasingBST([5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9]),
            [1, null, 2, null, 3, null, 4, null, 5, null, 6, null, 7, null, 8, null, 9],
        )

    def test_2(self):
        # For sanity checking:
        # Input: root = [5,1,7]
        # Output: [1,null,5,null,7]

        self.assertEqual(Solution.increasingBST([5, 1, 7]), [1, null, 5, null, 7])


if __name__ == "__main__":
    unittest.main()
