import unittest

from Python3.shortestdistancetoacharacter import Solution


class TestshortestToChar(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: s = "loveleetcode", c = "e"
        # Output: [3,2,1,0,1,0,0,1,2,2,1,0]

        self.assertEqual(
            Solution.shortestToChar("loveleetcode", "e"),
            [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0],
        )

    def test_2(self):
        # For sanity checking:
        # Input: s = "aaab", c = "b"
        # Output: [3,2,1,0]

        self.assertEqual(Solution.shortestToChar("aaab", "b"), [3, 2, 1, 0])


if __name__ == "__main__":
    unittest.main()
