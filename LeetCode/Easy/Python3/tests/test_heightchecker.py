import unittest

from Python3.heightchecker import Solution


class TestheightChecker(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: heights = [1,1,4,2,1,3]
        # Output: 3

        self.assertEqual(Solution.heightChecker([1, 1, 4, 2, 1, 3]), 3)

    def test_2(self):
        # For sanity checking:
        # Input: heights = [5,1,2,3,4]
        # Output: 5

        self.assertEqual(Solution.heightChecker([5, 1, 2, 3, 4]), 5)

    def test_3(self):
        # For sanity checking:
        # Input: heights = [1,2,3,4,5]
        # Output: 0

        self.assertEqual(Solution.heightChecker([1, 2, 3, 4, 5]), 0)


if __name__ == "__main__":
    unittest.main()
