import unittest

from Python3.splitastringinbalancedstrings import Solution


class TestbalancedStringSplit(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: s = "RLRRLLRLRL"
        # Output: 4

        self.assertEqual(Solution.balancedStringSplit("RLRRLLRLRL"), 4)

    def test_2(self):
        # For sanity checking:
        # Input: s = "RLLLLRRRLR"
        # Output: 3

        self.assertEqual(Solution.balancedStringSplit("RLLLLRRRLR"), 3)

    def test_3(self):
        # For sanity checking:
        # Input: s = "LLLLRRRR"
        # Output: 1

        self.assertEqual(Solution.balancedStringSplit("LLLLRRRR"), 1)

    def test_4(self):
        # For sanity checking:
        # Input: s = "RLRRRLLRLL"
        # Output: 2

        self.assertEqual(Solution.balancedStringSplit("RLRRRLLRLL"), 2)


if __name__ == "__main__":
    unittest.main()
