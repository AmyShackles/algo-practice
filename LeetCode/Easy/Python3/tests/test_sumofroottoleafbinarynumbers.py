import unittest

from Python3.sumofroottoleafbinarynumbers import Solution


class TestsumRootToLeaf(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: root = [1,0,1,0,1,0,1]
        # Output: 22

        self.assertEqual(Solution.sumRootToLeaf([1, 0, 1, 0, 1, 0, 1]), 22)

    def test_2(self):
        # For sanity checking:
        # Input: root = [0]
        # Output: 0

        self.assertEqual(Solution.sumRootToLeaf([0]), 0)

    def test_3(self):
        # For sanity checking:
        # Input: root = [1]
        # Output: 1

        self.assertEqual(Solution.sumRootToLeaf([1]), 1)

    def test_4(self):
        # For sanity checking:
        # Input: root = [1,1]
        # Output: 3

        self.assertEqual(Solution.sumRootToLeaf([1, 1]), 3)


if __name__ == "__main__":
    unittest.main()
