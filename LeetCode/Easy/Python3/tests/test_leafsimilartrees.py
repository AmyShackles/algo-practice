import unittest

from Python3.leafsimilartrees import Solution


class TestleafSimilar(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
        # Output: true

        self.assertEqual(
            Solution.leafSimilar(
                [3, 5, 1, 6, 2, 9, 8, null, null, 7, 4],
                [3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8],
            ),
            true,
        )

    def test_2(self):
        # For sanity checking:
        # Input: root1 = [1], root2 = [1]
        # Output: true

        self.assertEqual(Solution.leafSimilar([1], [1]), true)

    def test_3(self):
        # For sanity checking:
        # Input: root1 = [1], root2 = [2]
        # Output: false

        self.assertEqual(Solution.leafSimilar([1], [2]), false)

    def test_4(self):
        # For sanity checking:
        # Input: root1 = [1,2], root2 = [2,2]
        # Output: true

        self.assertEqual(Solution.leafSimilar([1, 2], [2, 2]), true)

    def test_5(self):
        # For sanity checking:
        # Input: root1 = [1,2,3], root2 = [1,3,2]
        # Output: false

        self.assertEqual(Solution.leafSimilar([1, 2, 3], [1, 3, 2]), false)


if __name__ == "__main__":
    unittest.main()
