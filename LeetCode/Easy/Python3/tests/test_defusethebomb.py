import unittest

from Python3.defusethebomb import Solution


class Testdecrypt(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: code = [5,7,1,4], k = 3
        # Output: [12,10,16,13]

        self.assertEqual(Solution.decrypt([5, 7, 1, 4], 3), [12, 10, 16, 13])

    def test_2(self):
        # For sanity checking:
        # Input: code = [1,2,3,4], k = 0
        # Output: [0,0,0,0]

        self.assertEqual(Solution.decrypt([1, 2, 3, 4], 0), [0, 0, 0, 0])

    def test_3(self):
        # For sanity checking:
        # Input: code = [2,4,9,3], k = -2
        # Output: [12,5,6,13]

        self.assertEqual(Solution.decrypt([2, 4, 9, 3], -2), [12, 5, 6, 13])


if __name__ == "__main__":
    unittest.main()
