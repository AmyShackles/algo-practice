import unittest

from Python3.uniquemorsecodewords import Solution


class TestuniqueMorseRepresentations(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: words = ["gin", "zen", "gig", "msg"]
        # Output: 2

        self.assertEqual(
            Solution.uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]), 2
        )


if __name__ == "__main__":
    unittest.main()
