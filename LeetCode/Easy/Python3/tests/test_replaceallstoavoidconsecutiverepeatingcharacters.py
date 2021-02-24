import unittest

from Python3.replaceallstoavoidconsecutiverepeatingcharacters import Solution


class TestmodifyString(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: s = "?zs"
        # Output: "azs"

        self.assertEqual(Solution.modifyString("?zs"), "azs")

    def test_2(self):
        # For sanity checking:
        # Input: s = "ubv?w"
        # Output: "ubvaw"

        self.assertEqual(Solution.modifyString("ubv?w"), "ubvaw")

    def test_3(self):
        # For sanity checking:
        # Input: s = "j?qg??b"
        # Output: "jaqgacb"

        self.assertEqual(Solution.modifyString("j?qg??b"), "jaqgacb")

    def test_4(self):
        # For sanity checking:
        # Input: s = "??yw?ipkj?"
        # Output: "acywaipkja"

        self.assertEqual(Solution.modifyString("??yw?ipkj?"), "acywaipkja")


if __name__ == "__main__":
    unittest.main()
