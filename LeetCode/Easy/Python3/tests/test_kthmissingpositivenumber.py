import unittest

from Python3.kthmissingpositivenumber import Solution


class TestfindKthPositive(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: arr = [2,3,4,7,11], k = 5
        # Output: 9

        self.assertEqual(Solution.findKthPositive([2, 3, 4, 7, 11], 5), 9)

    def test_2(self):
        # For sanity checking:
        # Input: arr = [1,2,3,4], k = 2
        # Output: 6

        self.assertEqual(Solution.findKthPositive([1, 2, 3, 4], 2), 6)


if __name__ == "__main__":
    unittest.main()
