import unittest

from Python3.deletecolumnstomakesorted import Solution


class TestminDeletionSize(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: strs = ["cba","daf","ghi"]
        # Output: 1

        self.assertEqual(Solution.minDeletionSize(["cba", "daf", "ghi"]), 1)

    def test_2(self):
        # For sanity checking:
        # Input: strs = ["a","b"]
        # Output: 0

        self.assertEqual(Solution.minDeletionSize(["a", "b"]), 0)

    def test_3(self):
        # For sanity checking:
        # Input: strs = ["zyx","wvu","tsr"]
        # Output: 3

        self.assertEqual(Solution.minDeletionSize(["zyx", "wvu", "tsr"]), 3)


if __name__ == "__main__":
    unittest.main()
