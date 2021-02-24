import unittest

from Python3.monotonicarray import Solution


class TestisMonotonic(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: [1,2,2,3]
        # Output: true

        self.assertEqual(Solution.isMonotonic([1, 2, 2, 3]), true)

    def test_2(self):
        # For sanity checking:
        # Input: [6,5,4,4]
        # Output: true

        self.assertEqual(Solution.isMonotonic([6, 5, 4, 4]), true)

    def test_3(self):
        # For sanity checking:
        # Input: [1,3,2]
        # Output: false

        self.assertEqual(Solution.isMonotonic([1, 3, 2]), false)

    def test_4(self):
        # For sanity checking:
        # Input: [1,2,4,5]
        # Output: true

        self.assertEqual(Solution.isMonotonic([1, 2, 4, 5]), true)

    def test_5(self):
        # For sanity checking:
        # Input: [1,1,1]
        # Output: true

        self.assertEqual(Solution.isMonotonic([1, 1, 1]), true)


if __name__ == "__main__":
    unittest.main()
