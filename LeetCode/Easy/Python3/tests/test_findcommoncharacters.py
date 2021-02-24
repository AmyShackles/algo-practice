import unittest

from Python3.findcommoncharacters import Solution


class TestcommonChars(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: ["bella","label","roller"]
        # Output: ["e","l","l"]

        self.assertEqual(
            Solution.commonChars(["bella", "label", "roller"]), ["e", "l", "l"]
        )

    def test_2(self):
        # For sanity checking:
        # Input: ["cool","lock","cook"]
        # Output: ["c","o"]

        self.assertEqual(Solution.commonChars(["cool", "lock", "cook"]), ["c", "o"])


if __name__ == "__main__":
    unittest.main()
