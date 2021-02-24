import unittest

from Python3.getmaximumingeneratedarray import Solution


class TestgetMaximumGenerated(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: n = 7
        # Output: 3

        self.assertEqual(Solution.getMaximumGenerated(7), 3)

    def test_2(self):
        # For sanity checking:
        # Input: n = 2
        # Output: 1

        self.assertEqual(Solution.getMaximumGenerated(2), 1)

    def test_3(self):
        # For sanity checking:
        # Input: n = 3
        # Output: 2

        self.assertEqual(Solution.getMaximumGenerated(3), 2)


if __name__ == "__main__":
    unittest.main()
