import unittest

from Python3.uglynumber import Solution


class TestisUgly(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: 6
        # Output: true

        self.assertEqual(Solution.isUgly(6), true)

    def test_2(self):
        # For sanity checking:
        # Input: 8
        # Output: true

        self.assertEqual(Solution.isUgly(8), true)

    def test_3(self):
        # For sanity checking:
        # Input: 14
        # Output: false

        self.assertEqual(Solution.isUgly(14), false)


if __name__ == "__main__":
    unittest.main()
