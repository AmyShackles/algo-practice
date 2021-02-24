import unittest

from Python3.balancedbinarytree import Solution


class TestisBalanced(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: root = [3,9,20,null,null,15,7]
        # Output: true

        self.assertEqual(Solution.isBalanced([3, 9, 20, null, null, 15, 7]), true)

    def test_2(self):
        # For sanity checking:
        # Input: root = [1,2,2,3,3,null,null,4,4]
        # Output: false

        self.assertEqual(Solution.isBalanced([1, 2, 2, 3, 3, null, null, 4, 4]), false)

    def test_3(self):
        # For sanity checking:
        # Input: root = []
        # Output: true

        self.assertEqual(Solution.isBalanced([]), true)


if __name__ == "__main__":
    unittest.main()
