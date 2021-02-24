import unittest

from Python3.secondminimumnodeinabinarytree import Solution


class TestfindSecondMinimumValue(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: root = [2,2,5,null,null,5,7]
        # Output: 5

        self.assertEqual(
            Solution.findSecondMinimumValue([2, 2, 5, null, null, 5, 7]), 5
        )

    def test_2(self):
        # For sanity checking:
        # Input: root = [2,2,2]
        # Output: -1

        self.assertEqual(Solution.findSecondMinimumValue([2, 2, 2]), -1)


if __name__ == "__main__":
    unittest.main()
