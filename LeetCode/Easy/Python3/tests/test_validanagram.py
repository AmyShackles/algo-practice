import unittest

from Python3.validanagram import Solution


class TestisAnagram(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: s = "anagram", t = "nagaram"
        # Output: true

        self.assertEqual(Solution.isAnagram("anagram", "nagaram"), true)

    def test_2(self):
        # For sanity checking:
        # Input: s = "rat", t = "car"
        # Output: false

        self.assertEqual(Solution.isAnagram("rat", "car"), false)


if __name__ == "__main__":
    unittest.main()
