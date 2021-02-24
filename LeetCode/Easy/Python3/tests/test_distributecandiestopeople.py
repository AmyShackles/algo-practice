import unittest

from Python3.distributecandiestopeople import Solution


class TestdistributeCandies(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: candies = 7, num_people = 4
        # Output: [1,2,3,1]

        self.assertEqual(Solution.distributeCandies(7, 4), [1, 2, 3, 1])

    def test_2(self):
        # For sanity checking:
        # Input: candies = 10, num_people = 3
        # Output: [5,2,3]

        self.assertEqual(Solution.distributeCandies(10, 3), [5, 2, 3])


if __name__ == "__main__":
    unittest.main()
