import unittest

from Python3.goatlatin import Solution


class TesttoGoatLatin(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: "I speak Goat Latin"
        # Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"

        self.assertEqual(
            Solution.toGoatLatin("I speak Goat Latin"),
            "Imaa peaksmaaa oatGmaaaa atinLmaaaaa",
        )

    def test_2(self):
        # For sanity checking:
        # Input: "The quick brown fox jumped over the lazy dog"
        # Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"

        self.assertEqual(
            Solution.toGoatLatin("The quick brown fox jumped over the lazy dog"),
            "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa",
        )


if __name__ == "__main__":
    unittest.main()
