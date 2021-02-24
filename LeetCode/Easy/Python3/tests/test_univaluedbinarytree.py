import unittest

from Python3.univaluedbinarytree import Solution


class TestisUnivalTree(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: [1,1,1,1,1,null,1]
        # Output: true

        self.assertEqual(Solution.isUnivalTree([1, 1, 1, 1, 1, null, 1]), true)

    def test_2(self):
        # For sanity checking:
        # Input: [2,2,2,5,2]
        # Output: false

        self.assertEqual(Solution.isUnivalTree([2, 2, 2, 5, 2]), false)


if __name__ == "__main__":
    unittest.main()
