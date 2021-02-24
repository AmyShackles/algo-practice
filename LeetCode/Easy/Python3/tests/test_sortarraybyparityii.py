import unittest

from Python3.sortarraybyparityii import Solution


class TestsortArrayByParityII(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: [4,2,5,7]
        # Output: [4,5,2,7]

        self.assertEqual(Solution.sortArrayByParityII([4, 2, 5, 7]), [4, 5, 2, 7])


if __name__ == "__main__":
    unittest.main()
