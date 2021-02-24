import unittest

from Python3.largestnumberatleasttwiceofothers import Solution


class TestdominantIndex(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums = [3, 6, 1, 0]
        # Output: 1

        self.assertEqual(Solution.dominantIndex([3, 6, 1, 0]), 1)

    def test_2(self):
        # For sanity checking:
        # Input: nums = [1, 2, 3, 4]
        # Output: -1

        self.assertEqual(Solution.dominantIndex([1, 2, 3, 4]), -1)


if __name__ == "__main__":
    unittest.main()
