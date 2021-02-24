import unittest

from Python3.findnuniqueintegerssumuptozero import Solution


class TestsumZero(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: n = 5
        # Output: [-7,-1,1,3,4]

        self.assertEqual(Solution.sumZero(5), [-7, -1, 1, 3, 4])

    def test_2(self):
        # For sanity checking:
        # Input: n = 3
        # Output: [-1,0,1]

        self.assertEqual(Solution.sumZero(3), [-1, 0, 1])

    def test_3(self):
        # For sanity checking:
        # Input: n = 1
        # Output: [0]

        self.assertEqual(Solution.sumZero(1), [0])


if __name__ == "__main__":
    unittest.main()
