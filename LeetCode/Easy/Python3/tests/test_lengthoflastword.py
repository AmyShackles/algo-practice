import unittest

from Python3.lengthoflastword import Solution


class TestlengthOfLastWord(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: s = "Hello World"
        # Output: 5

        self.assertEqual(Solution.lengthOfLastWord("Hello World"), 5)

    def test_2(self):
        # For sanity checking:
        # Input: s = " "
        # Output: 0

        self.assertEqual(Solution.lengthOfLastWord(" "), 0)


if __name__ == "__main__":
    unittest.main()
