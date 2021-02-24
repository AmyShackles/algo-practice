import unittest

from Python3.mergetwosortedlists import Solution


class TestmergeTwoLists(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: l1 = [1,2,4], l2 = [1,3,4]
        # Output: [1,1,2,3,4,4]

        self.assertEqual(
            Solution.mergeTwoLists([1, 2, 4], [1, 3, 4]), [1, 1, 2, 3, 4, 4]
        )

    def test_2(self):
        # For sanity checking:
        # Input: l1 = [], l2 = []
        # Output: []

        self.assertEqual(Solution.mergeTwoLists([], []), [])

    def test_3(self):
        # For sanity checking:
        # Input: l1 = [], l2 = [0]
        # Output: [0]

        self.assertEqual(Solution.mergeTwoLists([], [0]), [0])


if __name__ == "__main__":
    unittest.main()
