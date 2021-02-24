import unittest

from Python3.mergetwobinarytrees import Solution


class TestmergeTrees(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
        # Output: [3,4,5,5,4,null,7]

        self.assertEqual(
            Solution.mergeTrees([1, 3, 2, 5], [2, 1, 3, null, 4, null, 7]),
            [3, 4, 5, 5, 4, null, 7],
        )

    def test_2(self):
        # For sanity checking:
        # Input: root1 = [1], root2 = [1,2]
        # Output: [2,2]

        self.assertEqual(Solution.mergeTrees([1], [1, 2]), [2, 2])


if __name__ == "__main__":
    unittest.main()
