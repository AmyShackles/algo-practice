import unittest

from Python3.maximumnumberofballsinabox import Solution


class TestcountBalls(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: lowLimit = 1, highLimit = 10
        # Output: 2

        self.assertEqual(Solution.countBalls(1, 10), 2)

    def test_2(self):
        # For sanity checking:
        # Input: lowLimit = 5, highLimit = 15
        # Output: 2

        self.assertEqual(Solution.countBalls(5, 15), 2)

    def test_3(self):
        # For sanity checking:
        # Input: lowLimit = 19, highLimit = 28
        # Output: 2

        self.assertEqual(Solution.countBalls(19, 28), 2)


if __name__ == "__main__":
    unittest.main()
