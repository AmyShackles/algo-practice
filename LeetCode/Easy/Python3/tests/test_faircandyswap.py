import unittest

from Python3.faircandyswap import Solution


class TestfairCandySwap(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: A = [1,1], B = [2,2]
        # Output: [1,2]

        self.assertEqual(Solution.fairCandySwap([1, 1], [2, 2]), [1, 2])

    def test_2(self):
        # For sanity checking:
        # Input: A = [1,2], B = [2,3]
        # Output: [1,2]

        self.assertEqual(Solution.fairCandySwap([1, 2], [2, 3]), [1, 2])

    def test_3(self):
        # For sanity checking:
        # Input: A = [2], B = [1,3]
        # Output: [2,3]

        self.assertEqual(Solution.fairCandySwap([2], [1, 3]), [2, 3])

    def test_4(self):
        # For sanity checking:
        # Input: A = [1,2,5], B = [2,4]
        # Output: [5,4]

        self.assertEqual(Solution.fairCandySwap([1, 2, 5], [2, 4]), [5, 4])


if __name__ == "__main__":
    unittest.main()
