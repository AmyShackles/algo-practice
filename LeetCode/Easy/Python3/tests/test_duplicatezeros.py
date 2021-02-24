import unittest

from Python3.duplicatezeros import Solution


class TestduplicateZeros(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: [1,0,2,3,0,4,5,0]
        # Output: null

        self.assertEqual(Solution.duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]), null)

    def test_2(self):
        # For sanity checking:
        # Input: [1,2,3]
        # Output: null

        self.assertEqual(Solution.duplicateZeros([1, 2, 3]), null)


if __name__ == "__main__":
    unittest.main()
