import unittest

from Python3.maximumrepeatingsubstring import Solution


class TestmaxRepeating(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: sequence = "ababc", word = "ab"
        # Output: 2

        self.assertEqual(Solution.maxRepeating("ababc", "ab"), 2)

    def test_2(self):
        # For sanity checking:
        # Input: sequence = "ababc", word = "ba"
        # Output: 1

        self.assertEqual(Solution.maxRepeating("ababc", "ba"), 1)

    def test_3(self):
        # For sanity checking:
        # Input: sequence = "ababc", word = "ac"
        # Output: 0

        self.assertEqual(Solution.maxRepeating("ababc", "ac"), 0)


if __name__ == "__main__":
    unittest.main()
