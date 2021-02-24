import unittest

from Python3.pascalstriangle import Solution


class Testgenerate(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: numRows = 5
        # Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

        self.assertEqual(
            Solution.generate(5),
            [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]],
        )

    def test_2(self):
        # For sanity checking:
        # Input: numRows = 1
        # Output: [[1]]

        self.assertEqual(Solution.generate(1), [[1]])


if __name__ == "__main__":
    unittest.main()
