import unittest

from Python3.maximumproductofthreenumbers import Solution


class TestmaximumProduct(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums = [1,2,3]
        # Output: 6

        self.assertEqual(Solution.maximumProduct([1, 2, 3]), 6)

    def test_2(self):
        # For sanity checking:
        # Input: nums = [1,2,3,4]
        # Output: 24

        self.assertEqual(Solution.maximumProduct([1, 2, 3, 4]), 24)

    def test_3(self):
        # For sanity checking:
        # Input: nums = [-1,-2,-3]
        # Output: -6

        self.assertEqual(Solution.maximumProduct([-1, -2, -3]), -6)


if __name__ == "__main__":
    unittest.main()
