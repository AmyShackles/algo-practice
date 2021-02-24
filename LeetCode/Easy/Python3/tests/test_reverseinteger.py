import unittest

from Python3.reverseinteger import Solution


class Testreverse(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: x = 123
        # Output: 321

        self.assertEqual(Solution.reverse(123), 321)

    def test_2(self):
        # For sanity checking:
        # Input: x = -123
        # Output: -321

        self.assertEqual(Solution.reverse(-123), -321)

    def test_3(self):
        # For sanity checking:
        # Input: x = 120
        # Output: 21

        self.assertEqual(Solution.reverse(120), 21)

    def test_4(self):
        # For sanity checking:
        # Input: x = 0
        # Output: 0

        self.assertEqual(Solution.reverse(0), 0)


if __name__ == "__main__":
    unittest.main()
