import unittest

from Python3.peakindexinamountainarray import Solution


class TestpeakIndexInMountainArray(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: arr = [0,1,0]
        # Output: 1

        self.assertEqual(Solution.peakIndexInMountainArray([0, 1, 0]), 1)

    def test_2(self):
        # For sanity checking:
        # Input: arr = [0,2,1,0]
        # Output: 1

        self.assertEqual(Solution.peakIndexInMountainArray([0, 2, 1, 0]), 1)

    def test_3(self):
        # For sanity checking:
        # Input: arr = [0,10,5,2]
        # Output: 1

        self.assertEqual(Solution.peakIndexInMountainArray([0, 10, 5, 2]), 1)

    def test_4(self):
        # For sanity checking:
        # Input: arr = [3,4,5,1]
        # Output: 2

        self.assertEqual(Solution.peakIndexInMountainArray([3, 4, 5, 1]), 2)

    def test_5(self):
        # For sanity checking:
        # Input: arr = [24,69,100,99,79,78,67,36,26,19]
        # Output: 2

        self.assertEqual(
            Solution.peakIndexInMountainArray(
                [24, 69, 100, 99, 79, 78, 67, 36, 26, 19]
            ),
            2,
        )


if __name__ == "__main__":
    unittest.main()
