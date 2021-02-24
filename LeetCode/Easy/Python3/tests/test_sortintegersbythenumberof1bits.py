import unittest

from Python3.sortintegersbythenumberof1bits import Solution


class TestsortByBits(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: arr = [0,1,2,3,4,5,6,7,8]
        # Output: [0,1,2,4,8,3,5,6,7]

        self.assertEqual(
            Solution.sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]),
            [0, 1, 2, 4, 8, 3, 5, 6, 7],
        )

    def test_2(self):
        # For sanity checking:
        # Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]
        # Output: [1,2,4,8,16,32,64,128,256,512,1024]

        self.assertEqual(
            Solution.sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]),
            [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024],
        )

    def test_3(self):
        # For sanity checking:
        # Input: arr = [10000,10000]
        # Output: [10000,10000]

        self.assertEqual(Solution.sortByBits([10000, 10000]), [10000, 10000])

    def test_4(self):
        # For sanity checking:
        # Input: arr = [2,3,5,7,11,13,17,19]
        # Output: [2,3,5,17,7,11,13,19]

        self.assertEqual(
            Solution.sortByBits([2, 3, 5, 7, 11, 13, 17, 19]),
            [2, 3, 5, 17, 7, 11, 13, 19],
        )

    def test_5(self):
        # For sanity checking:
        # Input: arr = [10,100,1000,10000]
        # Output: [10,100,10000,1000]

        self.assertEqual(
            Solution.sortByBits([10, 100, 1000, 10000]), [10, 100, 10000, 1000]
        )


if __name__ == "__main__":
    unittest.main()
