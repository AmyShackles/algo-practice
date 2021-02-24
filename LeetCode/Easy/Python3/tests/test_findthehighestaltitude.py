import unittest

from Python3.findthehighestaltitude import Solution


class TestlargestAltitude(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: gain = [-5,1,5,0,-7]
        # Output: 1

        self.assertEqual(Solution.largestAltitude([-5, 1, 5, 0, -7]), 1)

    def test_2(self):
        # For sanity checking:
        # Input: gain = [-4,-3,-2,-1,4,3,2]
        # Output: 0

        self.assertEqual(Solution.largestAltitude([-4, -3, -2, -1, 4, 3, 2]), 0)


if __name__ == "__main__":
    unittest.main()
