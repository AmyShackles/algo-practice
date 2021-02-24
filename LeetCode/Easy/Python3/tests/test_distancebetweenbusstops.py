import unittest

from Python3.distancebetweenbusstops import Solution


class TestdistanceBetweenBusStops(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: distance = [1,2,3,4], start = 0, destination = 1
        # Output: 1

        self.assertEqual(Solution.distanceBetweenBusStops([1, 2, 3, 4], 0, 1), 1)

    def test_2(self):
        # For sanity checking:
        # Input: distance = [1,2,3,4], start = 0, destination = 2
        # Output: 3

        self.assertEqual(Solution.distanceBetweenBusStops([1, 2, 3, 4], 0, 2), 3)

    def test_3(self):
        # For sanity checking:
        # Input: distance = [1,2,3,4], start = 0, destination = 3
        # Output: 4

        self.assertEqual(Solution.distanceBetweenBusStops([1, 2, 3, 4], 0, 3), 4)


if __name__ == "__main__":
    unittest.main()
