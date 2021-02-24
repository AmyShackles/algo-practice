import unittest

from Python3.twosumivinputisabst import Solution


class TestfindTarget(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: root = [5,3,6,2,4,null,7], k = 9
        # Output: true

        self.assertEqual(Solution.findTarget([5, 3, 6, 2, 4, null, 7], 9), true)

    def test_2(self):
        # For sanity checking:
        # Input: root = [5,3,6,2,4,null,7], k = 28
        # Output: false

        self.assertEqual(Solution.findTarget([5, 3, 6, 2, 4, null, 7], 28), false)

    def test_3(self):
        # For sanity checking:
        # Input: root = [2,1,3], k = 4
        # Output: true

        self.assertEqual(Solution.findTarget([2, 1, 3], 4), true)

    def test_4(self):
        # For sanity checking:
        # Input: root = [2,1,3], k = 1
        # Output: false

        self.assertEqual(Solution.findTarget([2, 1, 3], 1), false)

    def test_5(self):
        # For sanity checking:
        # Input: root = [2,1,3], k = 3
        # Output: true

        self.assertEqual(Solution.findTarget([2, 1, 3], 3), true)


if __name__ == "__main__":
    unittest.main()
