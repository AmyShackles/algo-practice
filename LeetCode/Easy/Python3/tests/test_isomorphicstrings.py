import unittest

from Python3.isomorphicstrings import Solution


class TestisIsomorphic(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: s = "egg", t = "add"
        # Output: true

        self.assertEqual(Solution.isIsomorphic("egg", "add"), true)

    def test_2(self):
        # For sanity checking:
        # Input: s = "foo", t = "bar"
        # Output: false

        self.assertEqual(Solution.isIsomorphic("foo", "bar"), false)

    def test_3(self):
        # For sanity checking:
        # Input: s = "paper", t = "title"
        # Output: true

        self.assertEqual(Solution.isIsomorphic("paper", "title"), true)


if __name__ == "__main__":
    unittest.main()
