import unittest

from Python3.determineifstringhalvesarealike import Solution


class TesthalvesAreAlike(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: s = "book"
        # Output: true

        self.assertEqual(Solution.halvesAreAlike("book"), true)

    def test_2(self):
        # For sanity checking:
        # Input: s = "textbook"
        # Output: false

        self.assertEqual(Solution.halvesAreAlike("textbook"), false)

    def test_3(self):
        # For sanity checking:
        # Input: s = "MerryChristmas"
        # Output: false

        self.assertEqual(Solution.halvesAreAlike("MerryChristmas"), false)

    def test_4(self):
        # For sanity checking:
        # Input: s = "AbCdEfGh"
        # Output: true

        self.assertEqual(Solution.halvesAreAlike("AbCdEfGh"), true)


if __name__ == "__main__":
    unittest.main()
