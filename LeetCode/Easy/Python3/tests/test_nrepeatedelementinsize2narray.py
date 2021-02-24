import unittest

from Python3.nrepeatedelementinsize2narray import Solution


class TestrepeatedNTimes(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: [1,2,3,3]
        # Output: 3

        self.assertEqual(Solution.repeatedNTimes([1, 2, 3, 3]), 3)

    def test_2(self):
        # For sanity checking:
        # Input: [2,1,2,5,3,2]
        # Output: 2

        self.assertEqual(Solution.repeatedNTimes([2, 1, 2, 5, 3, 2]), 2)

    def test_3(self):
        # For sanity checking:
        # Input: [5,1,5,2,5,3,5,4]
        # Output: 5

        self.assertEqual(Solution.repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]), 5)


if __name__ == "__main__":
    unittest.main()
