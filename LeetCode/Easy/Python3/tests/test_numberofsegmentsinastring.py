import unittest

from Python3.numberofsegmentsinastring import Solution


class TestcountSegments(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: s = "Hello, my name is John"
        # Output: 5

        self.assertEqual(Solution.countSegments("Hello, my name is John"), 5)

    def test_2(self):
        # For sanity checking:
        # Input: s = "Hello"
        # Output: 1

        self.assertEqual(Solution.countSegments("Hello"), 1)

    def test_3(self):
        # For sanity checking:
        # Input: s = "love live! mu'sic forever"
        # Output: 4

        self.assertEqual(Solution.countSegments("love live! mu'sic forever"), 4)

    def test_4(self):
        # For sanity checking:
        # Input: s = ""
        # Output: 0

        self.assertEqual(Solution.countSegments(""), 0)


if __name__ == "__main__":
    unittest.main()
