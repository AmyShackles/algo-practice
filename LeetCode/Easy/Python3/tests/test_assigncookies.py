import unittest

from Python3.assigncookies import Solution


class TestfindContentChildren(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: g = [1,2,3], s = [1,1]
        # Output: 1

        self.assertEqual(Solution.findContentChildren([1, 2, 3], [1, 1]), 1)

    def test_2(self):
        # For sanity checking:
        # Input: g = [1,2], s = [1,2,3]
        # Output: 2

        self.assertEqual(Solution.findContentChildren([1, 2], [1, 2, 3]), 2)


if __name__ == "__main__":
    unittest.main()
