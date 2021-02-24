import unittest

from Python3.numbercomplement import Solution


class TestfindComplement(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: num = 5
        # Output: 2

        self.assertEqual(Solution.findComplement(5), 2)

    def test_2(self):
        # For sanity checking:
        # Input: num = 1
        # Output: 0

        self.assertEqual(Solution.findComplement(1), 0)


if __name__ == "__main__":
    unittest.main()
