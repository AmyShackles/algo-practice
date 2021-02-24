import unittest

from Python3.addtoarrayformofinteger import Solution


class TestaddToArrayForm(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: A = [1,2,0,0], K = 34
        # Output: [1,2,3,4]

        self.assertEqual(Solution.addToArrayForm([1, 2, 0, 0], 34), [1, 2, 3, 4])

    def test_2(self):
        # For sanity checking:
        # Input: A = [2,7,4], K = 181
        # Output: [4,5,5]

        self.assertEqual(Solution.addToArrayForm([2, 7, 4], 181), [4, 5, 5])

    def test_3(self):
        # For sanity checking:
        # Input: A = [2,1,5], K = 806
        # Output: [1,0,2,1]

        self.assertEqual(Solution.addToArrayForm([2, 1, 5], 806), [1, 0, 2, 1])

    def test_4(self):
        # For sanity checking:
        # Input: A = [9,9,9,9,9,9,9,9,9,9], K = 1
        # Output: [1,0,0,0,0,0,0,0,0,0,0]

        self.assertEqual(
            Solution.addToArrayForm([9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 1),
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        )


if __name__ == "__main__":
    unittest.main()
