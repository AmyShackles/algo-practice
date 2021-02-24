import unittest

from Python3.ranktransformofanarray import Solution


class TestarrayRankTransform(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: arr = [40,10,20,30]
        # Output: [4,1,2,3]

        self.assertEqual(Solution.arrayRankTransform([40, 10, 20, 30]), [4, 1, 2, 3])

    def test_2(self):
        # For sanity checking:
        # Input: arr = [100,100,100]
        # Output: [1,1,1]

        self.assertEqual(Solution.arrayRankTransform([100, 100, 100]), [1, 1, 1])

    def test_3(self):
        # For sanity checking:
        # Input: arr = [37,12,28,9,100,56,80,5,12]
        # Output: [5,3,4,2,8,6,7,1,3]

        self.assertEqual(
            Solution.arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12]),
            [5, 3, 4, 2, 8, 6, 7, 1, 3],
        )


if __name__ == "__main__":
    unittest.main()
