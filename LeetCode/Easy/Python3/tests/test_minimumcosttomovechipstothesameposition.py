import unittest

from Python3.minimumcosttomovechipstothesameposition import Solution


class TestminCostToMoveChips(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: position = [1,2,3]
        # Output: 1

        self.assertEqual(Solution.minCostToMoveChips([1, 2, 3]), 1)

    def test_2(self):
        # For sanity checking:
        # Input: position = [2,2,2,3,3]
        # Output: 2

        self.assertEqual(Solution.minCostToMoveChips([2, 2, 2, 3, 3]), 2)

    def test_3(self):
        # For sanity checking:
        # Input: position = [1,1000000000]
        # Output: 1

        self.assertEqual(Solution.minCostToMoveChips([1, 1000000000]), 1)


if __name__ == "__main__":
    unittest.main()
