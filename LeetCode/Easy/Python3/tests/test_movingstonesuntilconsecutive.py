import unittest

from Python3.movingstonesuntilconsecutive import Solution


class TestnumMovesStones(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: a = 1, b = 2, c = 5
        # Output: [1,2]

        self.assertEqual(Solution.numMovesStones(1, 2, 5), [1, 2])

    def test_2(self):
        # For sanity checking:
        # Input: a = 4, b = 3, c = 2
        # Output: [0,0]

        self.assertEqual(Solution.numMovesStones(4, 3, 2), [0, 0])

    def test_3(self):
        # For sanity checking:
        # Input: a = 3, b = 5, c = 1
        # Output: [1,2]

        self.assertEqual(Solution.numMovesStones(3, 5, 1), [1, 2])


if __name__ == "__main__":
    unittest.main()
