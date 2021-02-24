import unittest

from Python3.defanginganipaddress import Solution


class TestdefangIPaddr(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: address = "1.1.1.1"
        # Output: "1[.]1[.]1[.]1"

        self.assertEqual(Solution.defangIPaddr("1.1.1.1"), "1[.]1[.]1[.]1")

    def test_2(self):
        # For sanity checking:
        # Input: address = "255.100.50.0"
        # Output: "255[.]100[.]50[.]0"

        self.assertEqual(Solution.defangIPaddr("255.100.50.0"), "255[.]100[.]50[.]0")


if __name__ == "__main__":
    unittest.main()
