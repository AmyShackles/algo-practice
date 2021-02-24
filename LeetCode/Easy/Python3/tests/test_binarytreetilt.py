import unittest

from Python3.binarytreetilt import Solution


class TestfindTilt(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: root = [1,2,3]
        # Output: 1

        self.assertEqual(Solution.findTilt([1, 2, 3]), 1)

    def test_2(self):
        # For sanity checking:
        # Input: root = [4,2,9,3,5,null,7]
        # Output: 15

        self.assertEqual(Solution.findTilt([4, 2, 9, 3, 5, null, 7]), 15)

    def test_3(self):
        # For sanity checking:
        # Input: root = [21,7,14,1,1,2,2,3,3]
        # Output: 9

        self.assertEqual(Solution.findTilt([21, 7, 14, 1, 1, 2, 2, 3, 3]), 9)


if __name__ == "__main__":
    unittest.main()
