import unittest

from Python3.guessnumberhigherorlower import Solution


class TestguessNumber(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: n = 10, pick = 6
        # Output: 6

        self.assertEqual(Solution.guessNumber(10, 6), 6)

    def test_2(self):
        # For sanity checking:
        # Input: n = 1, pick = 1
        # Output: 1

        self.assertEqual(Solution.guessNumber(1, 1), 1)

    def test_3(self):
        # For sanity checking:
        # Input: n = 2, pick = 1
        # Output: 1

        self.assertEqual(Solution.guessNumber(2, 1), 1)

    def test_4(self):
        # For sanity checking:
        # Input: n = 2, pick = 2
        # Output: 2

        self.assertEqual(Solution.guessNumber(2, 2), 2)


if __name__ == "__main__":
    unittest.main()
