import unittest

from Python3.jewelsandstones import Solution


class TestnumJewelsInStones(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: jewels = "aA", stones = "aAAbbbb"
        # Output: 3

        self.assertEqual(Solution.numJewelsInStones("aA", "aAAbbbb"), 3)

    def test_2(self):
        # For sanity checking:
        # Input: jewels = "z", stones = "ZZ"
        # Output: 0

        self.assertEqual(Solution.numJewelsInStones("z", "ZZ"), 0)


if __name__ == "__main__":
    unittest.main()
