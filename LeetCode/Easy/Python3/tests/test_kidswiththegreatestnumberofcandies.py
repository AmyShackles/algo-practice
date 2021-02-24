import unittest

from Python3.kidswiththegreatestnumberofcandies import Solution


class TestkidsWithCandies(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: candies = [2,3,5,1,3], extraCandies = 3
        # Output: [true,true,true,false,true]

        self.assertEqual(
            Solution.kidsWithCandies([2, 3, 5, 1, 3], 3),
            [true, true, true, false, true],
        )

    def test_2(self):
        # For sanity checking:
        # Input: candies = [4,2,1,1,2], extraCandies = 1
        # Output: [true,false,false,false,false]

        self.assertEqual(
            Solution.kidsWithCandies([4, 2, 1, 1, 2], 1),
            [true, false, false, false, false],
        )

    def test_3(self):
        # For sanity checking:
        # Input: candies = [12,1,12], extraCandies = 10
        # Output: [true,false,true]

        self.assertEqual(Solution.kidsWithCandies([12, 1, 12], 10), [true, false, true])


if __name__ == "__main__":
    unittest.main()
