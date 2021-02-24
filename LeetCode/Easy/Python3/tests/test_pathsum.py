import unittest

from Python3.pathsum import Solution


class TesthasPathSum(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
        # Output: true

        self.assertEqual(
            Solution.hasPathSum(
                [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 22
            ),
            true,
        )

    def test_2(self):
        # For sanity checking:
        # Input: root = [1,2,3], targetSum = 5
        # Output: false

        self.assertEqual(Solution.hasPathSum([1, 2, 3], 5), false)

    def test_3(self):
        # For sanity checking:
        # Input: root = [1,2], targetSum = 0
        # Output: false

        self.assertEqual(Solution.hasPathSum([1, 2], 0), false)


if __name__ == "__main__":
    unittest.main()
