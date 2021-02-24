import unittest

from Python3.shortestcompletingword import Solution


class TestshortestCompletingWord(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: licensePlate = "1s3 PSt", words = ["step","steps","stripe","stepple"]
        # Output: "steps"

        self.assertEqual(
            Solution.shortestCompletingWord(
                "1s3 PSt", ["step", "steps", "stripe", "stepple"]
            ),
            "steps",
        )

    def test_2(self):
        # For sanity checking:
        # Input: licensePlate = "1s3 456", words = ["looks","pest","stew","show"]
        # Output: "pest"

        self.assertEqual(
            Solution.shortestCompletingWord(
                "1s3 456", ["looks", "pest", "stew", "show"]
            ),
            "pest",
        )

    def test_3(self):
        # For sanity checking:
        # Input: licensePlate = "Ah71752", words = ["suggest","letter","of","husband","easy","education","drug","prevent","writer","old"]
        # Output: "husband"

        self.assertEqual(
            Solution.shortestCompletingWord(
                "Ah71752",
                [
                    "suggest",
                    "letter",
                    "of",
                    "husband",
                    "easy",
                    "education",
                    "drug",
                    "prevent",
                    "writer",
                    "old",
                ],
            ),
            "husband",
        )

    def test_4(self):
        # For sanity checking:
        # Input: licensePlate = "OgEu755", words = ["enough","these","play","wide","wonder","box","arrive","money","tax","thus"]
        # Output: "enough"

        self.assertEqual(
            Solution.shortestCompletingWord(
                "OgEu755",
                [
                    "enough",
                    "these",
                    "play",
                    "wide",
                    "wonder",
                    "box",
                    "arrive",
                    "money",
                    "tax",
                    "thus",
                ],
            ),
            "enough",
        )

    def test_5(self):
        # For sanity checking:
        # Input: licensePlate = "iMSlpe4", words = ["claim","consumer","student","camera","public","never","wonder","simple","thought","use"]
        # Output: "simple"

        self.assertEqual(
            Solution.shortestCompletingWord(
                "iMSlpe4",
                [
                    "claim",
                    "consumer",
                    "student",
                    "camera",
                    "public",
                    "never",
                    "wonder",
                    "simple",
                    "thought",
                    "use",
                ],
            ),
            "simple",
        )


if __name__ == "__main__":
    unittest.main()
