import unittest

from Python3.maketwoarraysequalbyreversingsubarrays import Solution


class TestcanBeEqual(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: target = [1,2,3,4], arr = [2,4,1,3]
        # Output: true

        self.assertEqual(Solution.canBeEqual([1, 2, 3, 4], [2, 4, 1, 3]), true)

    def test_2(self):
        # For sanity checking:
        # Input: target = [7], arr = [7]
        # Output: true

        self.assertEqual(Solution.canBeEqual([7], [7]), true)

    def test_3(self):
        # For sanity checking:
        # Input: target = [1,12], arr = [12,1]
        # Output: true

        self.assertEqual(Solution.canBeEqual([1, 12], [12, 1]), true)

    def test_4(self):
        # For sanity checking:
        # Input: target = [3,7,9], arr = [3,7,11]
        # Output: false

        self.assertEqual(Solution.canBeEqual([3, 7, 9], [3, 7, 11]), false)

    def test_5(self):
        # For sanity checking:
        # Input: target = [1,1,1,1,1], arr = [1,1,1,1,1]
        # Output: true

        self.assertEqual(Solution.canBeEqual([1, 1, 1, 1, 1], [1, 1, 1, 1, 1]), true)


if __name__ == "__main__":
    unittest.main()
