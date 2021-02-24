import unittest

from Python3.checkarrayformationthroughconcatenation import Solution


class TestcanFormArray(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: arr = [85], pieces = [[85]]
        # Output: true

        self.assertEqual(Solution.canFormArray([85], [[85]]), true)

    def test_2(self):
        # For sanity checking:
        # Input: arr = [15,88], pieces = [[88],[15]]
        # Output: true

        self.assertEqual(Solution.canFormArray([15, 88], [[88], [15]]), true)

    def test_3(self):
        # For sanity checking:
        # Input: arr = [49,18,16], pieces = [[16,18,49]]
        # Output: false

        self.assertEqual(Solution.canFormArray([49, 18, 16], [[16, 18, 49]]), false)

    def test_4(self):
        # For sanity checking:
        # Input: arr = [91,4,64,78], pieces = [[78],[4,64],[91]]
        # Output: true

        self.assertEqual(
            Solution.canFormArray([91, 4, 64, 78], [[78], [4, 64], [91]]), true
        )

    def test_5(self):
        # For sanity checking:
        # Input: arr = [1,3,5,7], pieces = [[2,4,6,8]]
        # Output: false

        self.assertEqual(Solution.canFormArray([1, 3, 5, 7], [[2, 4, 6, 8]]), false)


if __name__ == "__main__":
    unittest.main()
