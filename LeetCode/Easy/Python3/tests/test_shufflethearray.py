import unittest

from Python3.shufflethearray import Solution


class Testshuffle(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums = [2,5,1,3,4,7], n = 3
        # Output: [2,3,5,4,1,7]

        self.assertEqual(Solution.shuffle([2, 5, 1, 3, 4, 7], 3), [2, 3, 5, 4, 1, 7])

    def test_2(self):
        # For sanity checking:
        # Input: nums = [1,2,3,4,4,3,2,1], n = 4
        # Output: [1,4,2,3,3,2,4,1]

        self.assertEqual(
            Solution.shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4), [1, 4, 2, 3, 3, 2, 4, 1]
        )

    def test_3(self):
        # For sanity checking:
        # Input: nums = [1,1,2,2], n = 2
        # Output: [1,2,1,2]

        self.assertEqual(Solution.shuffle([1, 1, 2, 2], 2), [1, 2, 1, 2])


if __name__ == "__main__":
    unittest.main()
