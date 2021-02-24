import unittest

from Python3.detectcapital import Solution


class TestdetectCapitalUse(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: "USA"
        # Output: True

        self.assertEqual(Solution.detectCapitalUse("USA"), True)

    def test_2(self):
        # For sanity checking:
        # Input: "FlaG"
        # Output: False

        self.assertEqual(Solution.detectCapitalUse("FlaG"), False)


if __name__ == "__main__":
    unittest.main()
