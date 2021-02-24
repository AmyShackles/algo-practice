import unittest

from Python3.validpalindrome import Solution


class TestisPalindrome(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: s = "A man, a plan, a canal: Panama"
        # Output: true

        self.assertEqual(Solution.isPalindrome("A man, a plan, a canal: Panama"), true)

    def test_2(self):
        # For sanity checking:
        # Input: s = "race a car"
        # Output: false

        self.assertEqual(Solution.isPalindrome("race a car"), false)


if __name__ == "__main__":
    unittest.main()
