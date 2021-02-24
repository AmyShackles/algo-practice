import unittest

from Python3.numberofgoodpairs import Solution


class TestnumIdenticalPairs(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums = [1,2,3,1,1,3]
        # Output: 4

        self.assertEqual(Solution.numIdenticalPairs([1, 2, 3, 1, 1, 3]), 4)

    def test_2(self):
        # For sanity checking:
        # Input: nums = [1,1,1,1]
        # Output: 6

        self.assertEqual(Solution.numIdenticalPairs([1, 1, 1, 1]), 6)

    def test_3(self):
        # For sanity checking:
        # Input: nums = [1,2,3]
        # Output: 0

        self.assertEqual(Solution.numIdenticalPairs([1, 2, 3]), 0)


if __name__ == "__main__":
    unittest.main()
