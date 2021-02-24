import unittest

from Python3.maximumdepthofbinarytree import Solution


class TestmaxDepth(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: root = [3,9,20,null,null,15,7]
        # Output: 3

        self.assertEqual(Solution.maxDepth([3, 9, 20, null, null, 15, 7]), 3)

    def test_2(self):
        # For sanity checking:
        # Input: root = [1,null,2]
        # Output: 2

        self.assertEqual(Solution.maxDepth([1, null, 2]), 2)

    def test_3(self):
        # For sanity checking:
        # Input: root = []
        # Output: 0

        self.assertEqual(Solution.maxDepth([]), 0)

    def test_4(self):
        # For sanity checking:
        # Input: root = [0]
        # Output: 1

        self.assertEqual(Solution.maxDepth([0]), 1)


if __name__ == "__main__":
    unittest.main()
