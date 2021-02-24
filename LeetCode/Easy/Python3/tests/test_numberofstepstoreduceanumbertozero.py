import unittest

from Python3.numberofstepstoreduceanumbertozero import Solution


class TestnumberOfSteps(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: num = 14
        # Output: 6

        self.assertEqual(Solution.numberOfSteps(14), 6)

    def test_2(self):
        # For sanity checking:
        # Input: num = 8
        # Output: 4

        self.assertEqual(Solution.numberOfSteps(8), 4)

    def test_3(self):
        # For sanity checking:
        # Input: num = 123
        # Output: 12

        self.assertEqual(Solution.numberOfSteps(123), 12)


if __name__ == "__main__":
    unittest.main()
