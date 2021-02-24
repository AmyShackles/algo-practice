import unittest

from Python3.checkifawordoccursasaprefixofanywordinasentence import Solution


class TestisPrefixOfWord(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: sentence = "i love eating burger", searchWord = "burg"
        # Output: 4

        self.assertEqual(Solution.isPrefixOfWord("i love eating burger", "burg"), 4)

    def test_2(self):
        # For sanity checking:
        # Input: sentence = "this problem is an easy problem", searchWord = "pro"
        # Output: 2

        self.assertEqual(
            Solution.isPrefixOfWord("this problem is an easy problem", "pro"), 2
        )

    def test_3(self):
        # For sanity checking:
        # Input: sentence = "i am tired", searchWord = "you"
        # Output: -1

        self.assertEqual(Solution.isPrefixOfWord("i am tired", "you"), -1)

    def test_4(self):
        # For sanity checking:
        # Input: sentence = "i use triple pillow", searchWord = "pill"
        # Output: 4

        self.assertEqual(Solution.isPrefixOfWord("i use triple pillow", "pill"), 4)

    def test_5(self):
        # For sanity checking:
        # Input: sentence = "hello from the other side", searchWord = "they"
        # Output: -1

        self.assertEqual(
            Solution.isPrefixOfWord("hello from the other side", "they"), -1
        )


if __name__ == "__main__":
    unittest.main()
