import unittest

from Python3.relativesortarray import Solution


class TestrelativeSortArray(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
        # Output: [2,2,2,1,4,3,3,9,6,7,19]

        self.assertEqual(
            Solution.relativeSortArray(
                [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]
            ),
            [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19],
        )


if __name__ == "__main__":
    unittest.main()
