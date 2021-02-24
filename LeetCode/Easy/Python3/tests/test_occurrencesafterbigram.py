import unittest

from Python3.occurrencesafterbigram import Solution


class TestfindOcurrences(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: text = "alice is a good girl she is a good student", first = "a", second = "good"
        # Output: ["girl","student"]

        self.assertEqual(
            Solution.findOcurrences(
                "alice is a good girl she is a good student", "a", "good"
            ),
            ["girl", "student"],
        )

    def test_2(self):
        # For sanity checking:
        # Input: text = "we will we will rock you", first = "we", second = "will"
        # Output: ["we","rock"]

        self.assertEqual(
            Solution.findOcurrences("we will we will rock you", "we", "will"),
            ["we", "rock"],
        )


if __name__ == "__main__":
    unittest.main()
