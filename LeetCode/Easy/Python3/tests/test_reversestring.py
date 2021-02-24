import unittest

from Python3.reversestring import Solution


class TestreverseString(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: ["h","e","l","l","o"]
        # Output: ["o","l","l","e","h"]

        self.assertEqual(
            Solution.reverseString(["h", "e", "l", "l", "o"]), ["o", "l", "l", "e", "h"]
        )

    def test_2(self):
        # For sanity checking:
        # Input: ["H","a","n","n","a","h"]
        # Output: ["h","a","n","n","a","H"]

        self.assertEqual(
            Solution.reverseString(["H", "a", "n", "n", "a", "h"]),
            ["h", "a", "n", "n", "a", "H"],
        )


if __name__ == "__main__":
    unittest.main()
