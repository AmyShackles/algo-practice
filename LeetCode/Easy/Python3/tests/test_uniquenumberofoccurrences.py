import unittest

from Python3.uniquenumberofoccurrences import Solution


class TestuniqueOccurrences(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: arr = [1,2,2,1,1,3]
        # Output: true

        self.assertEqual(Solution.uniqueOccurrences([1, 2, 2, 1, 1, 3]), true)

    def test_2(self):
        # For sanity checking:
        # Input: arr = [1,2]
        # Output: false

        self.assertEqual(Solution.uniqueOccurrences([1, 2]), false)

    def test_3(self):
        # For sanity checking:
        # Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
        # Output: true

        self.assertEqual(
            Solution.uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]), true
        )


if __name__ == "__main__":
    unittest.main()
