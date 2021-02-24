import unittest

from Python3.reverseonlyletters import Solution


class TestreverseOnlyLetters(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: "ab-cd"
        # Output: "dc-ba"

        self.assertEqual(Solution.reverseOnlyLetters("ab-cd"), "dc-ba")

    def test_2(self):
        # For sanity checking:
        # Input: "a-bC-dEf-ghIj"
        # Output: "j-Ih-gfE-dCba"

        self.assertEqual(Solution.reverseOnlyLetters("a-bC-dEf-ghIj"), "j-Ih-gfE-dCba")

    def test_3(self):
        # For sanity checking:
        # Input: "Test1ng-Leet=code-Q!"
        # Output: "Qedo1ct-eeLg=ntse-T!"

        self.assertEqual(
            Solution.reverseOnlyLetters("Test1ng-Leet=code-Q!"), "Qedo1ct-eeLg=ntse-T!"
        )


if __name__ == "__main__":
    unittest.main()
