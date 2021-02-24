import unittest

from Python3.complementofbase10integer import Solution


class TestbitwiseComplement(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: 5
        # Output: 2

        self.assertEqual(Solution.bitwiseComplement(5), 2)

    def test_2(self):
        # For sanity checking:
        # Input: 7
        # Output: 0

        self.assertEqual(Solution.bitwiseComplement(7), 0)

    def test_3(self):
        # For sanity checking:
        # Input: 10
        # Output: 5

        self.assertEqual(Solution.bitwiseComplement(10), 5)


if __name__ == "__main__":
    unittest.main()
