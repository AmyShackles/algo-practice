import unittest

from Python3.reversevowelsofastring import Solution


class TestreverseVowels(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: "hello"
        # Output: "holle"

        self.assertEqual(Solution.reverseVowels("hello"), "holle")


if __name__ == "__main__":
    unittest.main()
