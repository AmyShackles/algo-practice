import unittest

from Python3.luckynumbersinamatrix import Solution


class TestluckyNumbers(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
        # Output: [15]

        self.assertEqual(
            Solution.luckyNumbers([[3, 7, 8], [9, 11, 13], [15, 16, 17]]), [15]
        )

    def test_2(self):
        # For sanity checking:
        # Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
        # Output: [12]

        self.assertEqual(
            Solution.luckyNumbers([[1, 10, 4, 2], [9, 3, 8, 7], [15, 16, 17, 12]]), [12]
        )

    def test_3(self):
        # For sanity checking:
        # Input: matrix = [[7,8],[1,2]]
        # Output: [7]

        self.assertEqual(Solution.luckyNumbers([[7, 8], [1, 2]]), [7])


if __name__ == "__main__":
    unittest.main()
