import unittest

from Python3.minimumdepthofbinarytree import Solution


class TestminDepth(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: root = [3,9,20,null,null,15,7]
        # Output: 2

        self.assertEqual(Solution.minDepth([3, 9, 20, null, null, 15, 7]), 2)

    def test_2(self):
        # For sanity checking:
        # Input: root = [2,null,3,null,4,null,5,null,6]
        # Output: 5

        self.assertEqual(Solution.minDepth([2, null, 3, null, 4, null, 5, null, 6]), 5)


if __name__ == "__main__":
    unittest.main()
