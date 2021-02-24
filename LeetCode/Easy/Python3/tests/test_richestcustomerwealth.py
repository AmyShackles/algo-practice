import unittest

from Python3.richestcustomerwealth import Solution


class TestmaximumWealth(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: accounts = [[1,2,3],[3,2,1]]
        # Output: 6

        self.assertEqual(Solution.maximumWealth([[1, 2, 3], [3, 2, 1]]), 6)

    def test_2(self):
        # For sanity checking:
        # Input: accounts = [[1,5],[7,3],[3,5]]
        # Output: 10

        self.assertEqual(Solution.maximumWealth([[1, 5], [7, 3], [3, 5]]), 10)

    def test_3(self):
        # For sanity checking:
        # Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
        # Output: 17

        self.assertEqual(Solution.maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]]), 17)


if __name__ == "__main__":
    unittest.main()
