import unittest

from Python3.base7 import Solution


class TestconvertToBase7(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: 100
        # Output: "202"

        self.assertEqual(Solution.convertToBase7(100), "202")

    def test_2(self):
        # For sanity checking:
        # Input: -7
        # Output: "-10"

        self.assertEqual(Solution.convertToBase7(-7), "-10")


if __name__ == "__main__":
    unittest.main()
