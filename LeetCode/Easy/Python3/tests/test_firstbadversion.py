import unittest

from Python3.firstbadversion import Solution


class TestfirstBadVersion(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: n = 5, bad = 4
        # Output: 4

        self.assertEqual(Solution.firstBadVersion(5, 4), 4)

    def test_2(self):
        # For sanity checking:
        # Input: n = 1, bad = 1
        # Output: 1

        self.assertEqual(Solution.firstBadVersion(1, 1), 1)


if __name__ == "__main__":
    unittest.main()
