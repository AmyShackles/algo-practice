import unittest

from Python3.baseballgame import Solution


class TestcalPoints(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: ops = ["5","2","C","D","+"]
        # Output: 30

        self.assertEqual(Solution.calPoints(["5", "2", "C", "D", "+"]), 30)

    def test_2(self):
        # For sanity checking:
        # Input: ops = ["5","-2","4","C","D","9","+","+"]
        # Output: 27

        self.assertEqual(
            Solution.calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]), 27
        )

    def test_3(self):
        # For sanity checking:
        # Input: ops = ["1"]
        # Output: 1

        self.assertEqual(Solution.calPoints(["1"]), 1)


if __name__ == "__main__":
    unittest.main()
