import unittest

from Python3.countgoodtriplets import Solution


class TestcountGoodTriplets(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
        # Output: 4

        self.assertEqual(Solution.countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3), 4)

    def test_2(self):
        # For sanity checking:
        # Input: arr = [1,1,2,2,3], a = 0, b = 0, c = 1
        # Output: 0

        self.assertEqual(Solution.countGoodTriplets([1, 1, 2, 2, 3], 0, 0, 1), 0)


if __name__ == "__main__":
    unittest.main()
