import unittest

from Python3.findwordsthatcanbeformedbycharacters import Solution


class TestcountCharacters(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: words = ["cat","bt","hat","tree"], chars = "atach"
        # Output: 6

        self.assertEqual(
            Solution.countCharacters(["cat", "bt", "hat", "tree"], "atach"), 6
        )

    def test_2(self):
        # For sanity checking:
        # Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
        # Output: 10

        self.assertEqual(
            Solution.countCharacters(["hello", "world", "leetcode"], "welldonehoneyr"),
            10,
        )


if __name__ == "__main__":
    unittest.main()
