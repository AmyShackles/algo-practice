import unittest

from Python3.primearrangements import Solution


class TestnumPrimeArrangements(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: n = 5
        # Output: 12

        self.assertEqual(Solution.numPrimeArrangements(5), 12)

    def test_2(self):
        # For sanity checking:
        # Input: n = 100
        # Output: 682289015

        self.assertEqual(Solution.numPrimeArrangements(100), 682289015)


if __name__ == "__main__":
    unittest.main()
