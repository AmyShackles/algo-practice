import unittest

from Python3.threeconsecutiveodds import Solution


class TestthreeConsecutiveOdds(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: arr = [2,6,4,1]
        # Output: false

        self.assertEqual(Solution.threeConsecutiveOdds([2, 6, 4, 1]), false)

    def test_2(self):
        # For sanity checking:
        # Input: arr = [1,2,34,3,4,5,7,23,12]
        # Output: true

        self.assertEqual(
            Solution.threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]), true
        )


if __name__ == "__main__":
    unittest.main()
