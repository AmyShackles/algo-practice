import unittest

from Python3.minimumdistancebetweenbstnodes import Solution


class TestminDiffInBST(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: root = [4,2,6,1,3]
        # Output: 1

        self.assertEqual(Solution.minDiffInBST([4, 2, 6, 1, 3]), 1)

    def test_2(self):
        # For sanity checking:
        # Input: root = [1,0,48,null,null,12,49]
        # Output: 1

        self.assertEqual(Solution.minDiffInBST([1, 0, 48, null, null, 12, 49]), 1)


if __name__ == "__main__":
    unittest.main()
