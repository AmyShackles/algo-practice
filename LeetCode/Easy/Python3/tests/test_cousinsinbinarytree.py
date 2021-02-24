import unittest

from Python3.cousinsinbinarytree import Solution


class TestisCousins(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: root = [1,2,3,4], x = 4, y = 3
        # Output: false

        self.assertEqual(Solution.isCousins([1, 2, 3, 4], 4, 3), false)

    def test_2(self):
        # For sanity checking:
        # Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
        # Output: true

        self.assertEqual(Solution.isCousins([1, 2, 3, null, 4, null, 5], 5, 4), true)

    def test_3(self):
        # For sanity checking:
        # Input: root = [1,2,3,null,4], x = 2, y = 3
        # Output: false

        self.assertEqual(Solution.isCousins([1, 2, 3, null, 4], 2, 3), false)


if __name__ == "__main__":
    unittest.main()
