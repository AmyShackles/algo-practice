import unittest

from Python3.summaryranges import Solution


class TestsummaryRanges(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums = [0,1,2,4,5,7]
        # Output: ["0->2","4->5","7"]

        self.assertEqual(
            Solution.summaryRanges([0, 1, 2, 4, 5, 7]), ["0->2", "4->5", "7"]
        )

    def test_2(self):
        # For sanity checking:
        # Input: nums = [0,2,3,4,6,8,9]
        # Output: ["0","2->4","6","8->9"]

        self.assertEqual(
            Solution.summaryRanges([0, 2, 3, 4, 6, 8, 9]), ["0", "2->4", "6", "8->9"]
        )

    def test_3(self):
        # For sanity checking:
        # Input: nums = []
        # Output: []

        self.assertEqual(Solution.summaryRanges([]), [])

    def test_4(self):
        # For sanity checking:
        # Input: nums = [-1]
        # Output: ["-1"]

        self.assertEqual(Solution.summaryRanges([-1]), ["-1"])

    def test_5(self):
        # For sanity checking:
        # Input: nums = [0]
        # Output: ["0"]

        self.assertEqual(Solution.summaryRanges([0]), ["0"])


if __name__ == "__main__":
    unittest.main()
