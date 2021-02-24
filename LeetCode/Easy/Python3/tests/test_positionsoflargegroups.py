import unittest

from Python3.positionsoflargegroups import Solution


class TestlargeGroupPositions(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: s = "abbxxxxzzy"
        # Output: [[3,6]]

        self.assertEqual(Solution.largeGroupPositions("abbxxxxzzy"), [[3, 6]])

    def test_2(self):
        # For sanity checking:
        # Input: s = "abc"
        # Output: []

        self.assertEqual(Solution.largeGroupPositions("abc"), [])

    def test_3(self):
        # For sanity checking:
        # Input: s = "abcdddeeeeaabbbcd"
        # Output: [[3,5],[6,9],[12,14]]

        self.assertEqual(
            Solution.largeGroupPositions("abcdddeeeeaabbbcd"),
            [[3, 5], [6, 9], [12, 14]],
        )

    def test_4(self):
        # For sanity checking:
        # Input: s = "aba"
        # Output: []

        self.assertEqual(Solution.largeGroupPositions("aba"), [])


if __name__ == "__main__":
    unittest.main()
