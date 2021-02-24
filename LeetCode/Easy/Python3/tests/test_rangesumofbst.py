import unittest

from Python3.rangesumofbst import Solution


class TestrangeSumBST(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
        # Output: 32

        self.assertEqual(Solution.rangeSumBST([10, 5, 15, 3, 7, null, 18], 7, 15), 32)

    def test_2(self):
        # For sanity checking:
        # Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
        # Output: 23

        self.assertEqual(
            Solution.rangeSumBST([10, 5, 15, 3, 7, 13, 18, 1, null, 6], 6, 10), 23
        )


if __name__ == "__main__":
    unittest.main()
