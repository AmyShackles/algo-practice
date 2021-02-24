import unittest

from Python3.sametree import Solution


class TestisSameTree(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: p = [1,2,3], q = [1,2,3]
        # Output: true

        self.assertEqual(Solution.isSameTree([1, 2, 3], [1, 2, 3]), true)

    def test_2(self):
        # For sanity checking:
        # Input: p = [1,2], q = [1,null,2]
        # Output: false

        self.assertEqual(Solution.isSameTree([1, 2], [1, null, 2]), false)

    def test_3(self):
        # For sanity checking:
        # Input: p = [1,2,1], q = [1,1,2]
        # Output: false

        self.assertEqual(Solution.isSameTree([1, 2, 1], [1, 1, 2]), false)


if __name__ == "__main__":
    unittest.main()
