import unittest

from Python3.maximumnestingdepthoftheparentheses import Solution


class TestmaxDepth(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: s = "(1+(2*3)+((8)/4))+1"
        # Output: 3

        self.assertEqual(Solution.maxDepth("(1+(2*3)+((8)/4))+1"), 3)

    def test_2(self):
        # For sanity checking:
        # Input: s = "(1)+((2))+(((3)))"
        # Output: 3

        self.assertEqual(Solution.maxDepth("(1)+((2))+(((3)))"), 3)

    def test_3(self):
        # For sanity checking:
        # Input: s = "1+(2*3)/(2-1)"
        # Output: 1

        self.assertEqual(Solution.maxDepth("1+(2*3)/(2-1)"), 1)

    def test_4(self):
        # For sanity checking:
        # Input: s = "1"
        # Output: 0

        self.assertEqual(Solution.maxDepth("1"), 0)


if __name__ == "__main__":
    unittest.main()
