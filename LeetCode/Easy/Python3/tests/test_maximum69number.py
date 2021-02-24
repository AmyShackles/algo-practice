import unittest

from Python3.maximum69number import Solution


class Testmaximum69Number(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: num = 9669
        # Output: 9969

        self.assertEqual(Solution.maximum69Number(9669), 9969)

    def test_2(self):
        # For sanity checking:
        # Input: num = 9996
        # Output: 9999

        self.assertEqual(Solution.maximum69Number(9996), 9999)

    def test_3(self):
        # For sanity checking:
        # Input: num = 9999
        # Output: 9999

        self.assertEqual(Solution.maximum69Number(9999), 9999)


if __name__ == "__main__":
    unittest.main()
