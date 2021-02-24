import unittest

from Python3.mostvisitedsectorinacirculartrack import Solution


class TestmostVisited(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: n = 4, rounds = [1,3,1,2]
        # Output: [1,2]

        self.assertEqual(Solution.mostVisited(4, [1, 3, 1, 2]), [1, 2])

    def test_2(self):
        # For sanity checking:
        # Input: n = 2, rounds = [2,1,2,1,2,1,2,1,2]
        # Output: [2]

        self.assertEqual(Solution.mostVisited(2, [2, 1, 2, 1, 2, 1, 2, 1, 2]), [2])

    def test_3(self):
        # For sanity checking:
        # Input: n = 7, rounds = [1,3,5,7]
        # Output: [1,2,3,4,5,6,7]

        self.assertEqual(Solution.mostVisited(7, [1, 3, 5, 7]), [1, 2, 3, 4, 5, 6, 7])


if __name__ == "__main__":
    unittest.main()
