import unittest

from Python3.largestperimetertriangle import Solution


class TestlargestPerimeter(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: [2,1,2]
        # Output: 5

        self.assertEqual(Solution.largestPerimeter([2, 1, 2]), 5)

    def test_2(self):
        # For sanity checking:
        # Input: [1,2,1]
        # Output: 0

        self.assertEqual(Solution.largestPerimeter([1, 2, 1]), 0)

    def test_3(self):
        # For sanity checking:
        # Input: [3,2,3,4]
        # Output: 10

        self.assertEqual(Solution.largestPerimeter([3, 2, 3, 4]), 10)

    def test_4(self):
        # For sanity checking:
        # Input: [3,6,2,3]
        # Output: 8

        self.assertEqual(Solution.largestPerimeter([3, 6, 2, 3]), 8)


if __name__ == "__main__":
    unittest.main()
