import unittest

from Python3.climbingstairs import Solution


class TestclimbStairs(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: n = 2
        # Output: 2

        self.assertEqual(Solution.climbStairs(2), 2)

    def test_2(self):
        # For sanity checking:
        # Input: n = 3
        # Output: 3

        self.assertEqual(Solution.climbStairs(3), 3)


if __name__ == "__main__":
    unittest.main()
