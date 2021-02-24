import unittest

from Python3.addbinary import Solution


class TestaddBinary(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: a = "11", b = "1"
        # Output: "100"

        self.assertEqual(Solution.addBinary("11", "1"), "100")

    def test_2(self):
        # For sanity checking:
        # Input: a = "1010", b = "1011"
        # Output: "10101"

        self.assertEqual(Solution.addBinary("1010", "1011"), "10101")


if __name__ == "__main__":
    unittest.main()
