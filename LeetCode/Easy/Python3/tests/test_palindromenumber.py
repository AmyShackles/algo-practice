import unittest

from Python3.palindromenumber import Solution


class TestisPalindrome(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: x = 121
        # Output: true

        self.assertEqual(Solution.isPalindrome(121), true)

    def test_2(self):
        # For sanity checking:
        # Input: x = -121
        # Output: false

        self.assertEqual(Solution.isPalindrome(-121), false)

    def test_3(self):
        # For sanity checking:
        # Input: x = 10
        # Output: false

        self.assertEqual(Solution.isPalindrome(10), false)

    def test_4(self):
        # For sanity checking:
        # Input: x = -101
        # Output: false

        self.assertEqual(Solution.isPalindrome(-101), false)


if __name__ == "__main__":
    unittest.main()
