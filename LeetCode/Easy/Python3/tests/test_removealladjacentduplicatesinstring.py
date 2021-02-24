import unittest

from Python3.removealladjacentduplicatesinstring import Solution


class TestremoveDuplicates(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: "abbaca"
        # Output: "ca"

        self.assertEqual(Solution.removeDuplicates("abbaca"), "ca")


if __name__ == "__main__":
    unittest.main()
