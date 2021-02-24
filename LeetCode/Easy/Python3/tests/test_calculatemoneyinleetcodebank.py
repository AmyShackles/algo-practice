import unittest

from Python3.calculatemoneyinleetcodebank import Solution


class TesttotalMoney(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: n = 4
        # Output: 10

        self.assertEqual(Solution.totalMoney(4), 10)

    def test_2(self):
        # For sanity checking:
        # Input: n = 10
        # Output: 37

        self.assertEqual(Solution.totalMoney(10), 37)

    def test_3(self):
        # For sanity checking:
        # Input: n = 20
        # Output: 96

        self.assertEqual(Solution.totalMoney(20), 96)


if __name__ == "__main__":
    unittest.main()
