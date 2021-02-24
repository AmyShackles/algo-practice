import unittest

from Python3.reorderdatainlogfiles import Solution


class TestreorderLogFiles(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
        # Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]

        self.assertEqual(
            Solution.reorderLogFiles(
                [
                    "dig1 8 1 5 1",
                    "let1 art can",
                    "dig2 3 6",
                    "let2 own kit dig",
                    "let3 art zero",
                ]
            ),
            [
                "let1 art can",
                "let3 art zero",
                "let2 own kit dig",
                "dig1 8 1 5 1",
                "dig2 3 6",
            ],
        )

    def test_2(self):
        # For sanity checking:
        # Input: logs = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
        # Output: ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]

        self.assertEqual(
            Solution.reorderLogFiles(
                ["a1 9 2 3 1", "g1 act car", "zo4 4 7", "ab1 off key dog", "a8 act zoo"]
            ),
            ["g1 act car", "a8 act zoo", "ab1 off key dog", "a1 9 2 3 1", "zo4 4 7"],
        )


if __name__ == "__main__":
    unittest.main()
