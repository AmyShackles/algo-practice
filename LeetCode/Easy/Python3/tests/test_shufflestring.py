import unittest

from Python3.shufflestring import Solution


class TestrestoreString(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
        # Output: "leetcode"

        self.assertEqual(
            Solution.restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]), "leetcode"
        )

    def test_2(self):
        # For sanity checking:
        # Input: s = "abc", indices = [0,1,2]
        # Output: "abc"

        self.assertEqual(Solution.restoreString("abc", [0, 1, 2]), "abc")

    def test_3(self):
        # For sanity checking:
        # Input: s = "aiohn", indices = [3,1,4,2,0]
        # Output: "nihao"

        self.assertEqual(Solution.restoreString("aiohn", [3, 1, 4, 2, 0]), "nihao")

    def test_4(self):
        # For sanity checking:
        # Input: s = "aaiougrt", indices = [4,0,2,6,7,3,1,5]
        # Output: "arigatou"

        self.assertEqual(
            Solution.restoreString("aaiougrt", [4, 0, 2, 6, 7, 3, 1, 5]), "arigatou"
        )

    def test_5(self):
        # For sanity checking:
        # Input: s = "art", indices = [1,0,2]
        # Output: "rat"

        self.assertEqual(Solution.restoreString("art", [1, 0, 2]), "rat")


if __name__ == "__main__":
    unittest.main()
