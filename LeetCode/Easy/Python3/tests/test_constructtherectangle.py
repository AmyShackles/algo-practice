import unittest

from Python3.constructtherectangle import Solution


class TestconstructRectangle(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: area = 4
        # Output: [2,2]

        self.assertEqual(Solution.constructRectangle(4), [2, 2])

    def test_2(self):
        # For sanity checking:
        # Input: area = 37
        # Output: [37,1]

        self.assertEqual(Solution.constructRectangle(37), [37, 1])

    def test_3(self):
        # For sanity checking:
        # Input: area = 122122
        # Output: [427,286]

        self.assertEqual(Solution.constructRectangle(122122), [427, 286])


if __name__ == "__main__":
    unittest.main()
