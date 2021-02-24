import unittest

from Python3.distributecandies import Solution


class TestdistributeCandies(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: candyType = [1,1,2,2,3,3]
        # Output: 3

        self.assertEqual(Solution.distributeCandies([1, 1, 2, 2, 3, 3]), 3)

    def test_2(self):
        # For sanity checking:
        # Input: candyType = [1,1,2,3]
        # Output: 2

        self.assertEqual(Solution.distributeCandies([1, 1, 2, 3]), 2)

    def test_3(self):
        # For sanity checking:
        # Input: candyType = [6,6,6,6]
        # Output: 1

        self.assertEqual(Solution.distributeCandies([6, 6, 6, 6]), 1)


if __name__ == "__main__":
    unittest.main()
