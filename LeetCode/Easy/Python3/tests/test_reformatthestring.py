import unittest

from Python3.reformatthestring import Solution


class Testreformat(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: s = "a0b1c2"
        # Output: "0a1b2c"

        self.assertEqual(Solution.reformat("a0b1c2"), "0a1b2c")

    def test_2(self):
        # For sanity checking:
        # Input: s = "leetcode"
        # Output: ""

        self.assertEqual(Solution.reformat("leetcode"), "")

    def test_3(self):
        # For sanity checking:
        # Input: s = "1229857369"
        # Output: ""

        self.assertEqual(Solution.reformat("1229857369"), "")

    def test_4(self):
        # For sanity checking:
        # Input: s = "covid2019"
        # Output: "c2o0v1i9d"

        self.assertEqual(Solution.reformat("covid2019"), "c2o0v1i9d")

    def test_5(self):
        # For sanity checking:
        # Input: s = "ab123"
        # Output: "1a2b3"

        self.assertEqual(Solution.reformat("ab123"), "1a2b3")


if __name__ == "__main__":
    unittest.main()
