import unittest

from Python3.rearrangespacesbetweenwords import Solution


class TestreorderSpaces(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: text = "  this   is  a sentence "
        # Output: "this   is   a   sentence"

        self.assertEqual(
            Solution.reorderSpaces("  this   is  a sentence "),
            "this   is   a   sentence",
        )

    def test_2(self):
        # For sanity checking:
        # Input: text = " practice   makes   perfect"
        # Output: "practice   makes   perfect "

        self.assertEqual(
            Solution.reorderSpaces(" practice   makes   perfect"),
            "practice   makes   perfect ",
        )

    def test_3(self):
        # For sanity checking:
        # Input: text = "hello   world"
        # Output: "hello   world"

        self.assertEqual(Solution.reorderSpaces("hello   world"), "hello   world")

    def test_4(self):
        # For sanity checking:
        # Input: text = "  walks  udp package   into  bar a"
        # Output: "walks  udp  package  into  bar  a "

        self.assertEqual(
            Solution.reorderSpaces("  walks  udp package   into  bar a"),
            "walks  udp  package  into  bar  a ",
        )

    def test_5(self):
        # For sanity checking:
        # Input: text = "a"
        # Output: "a"

        self.assertEqual(Solution.reorderSpaces("a"), "a")


if __name__ == "__main__":
    unittest.main()
