import unittest

from Python3.groupsofspecialequivalentstrings import Solution


class TestnumSpecialEquivGroups(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: ["abcd","cdab","cbad","xyzz","zzxy","zzyx"]
        # Output: 3

        self.assertEqual(
            Solution.numSpecialEquivGroups(
                ["abcd", "cdab", "cbad", "xyzz", "zzxy", "zzyx"]
            ),
            3,
        )


if __name__ == "__main__":
    unittest.main()
