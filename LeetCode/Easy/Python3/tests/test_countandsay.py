import unittest

from Python3.countandsay import Solution


class TestcountAndSay(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: n = 1
        # Output: "1"

        self.assertEqual(Solution.countAndSay(1), "1")

    def test_2(self):
        # For sanity checking:
        # Input: n = 4
        # Output: "1211"

        self.assertEqual(Solution.countAndSay(4), "1211")


if __name__ == "__main__":
    unittest.main()
