import unittest

from Python3.pascalstriangleii import Solution


class TestgetRow(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: rowIndex = 3
        # Output: [1,3,3,1]

        self.assertEqual(Solution.getRow(3), [1, 3, 3, 1])

    def test_2(self):
        # For sanity checking:
        # Input: rowIndex = 0
        # Output: [1]

        self.assertEqual(Solution.getRow(0), [1])

    def test_3(self):
        # For sanity checking:
        # Input: rowIndex = 1
        # Output: [1,1]

        self.assertEqual(Solution.getRow(1), [1, 1])


if __name__ == "__main__":
    unittest.main()
