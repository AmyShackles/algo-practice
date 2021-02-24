import unittest

from Python3.plusone import Solution


class TestplusOne(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: digits = [1,2,3]
        # Output: [1,2,4]

        self.assertEqual(Solution.plusOne([1, 2, 3]), [1, 2, 4])

    def test_2(self):
        # For sanity checking:
        # Input: digits = [4,3,2,1]
        # Output: [4,3,2,2]

        self.assertEqual(Solution.plusOne([4, 3, 2, 1]), [4, 3, 2, 2])

    def test_3(self):
        # For sanity checking:
        # Input: digits = [0]
        # Output: [1]

        self.assertEqual(Solution.plusOne([0]), [1])


if __name__ == "__main__":
    unittest.main()
