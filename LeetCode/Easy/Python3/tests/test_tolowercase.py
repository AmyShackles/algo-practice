import unittest

from Python3.tolowercase import Solution


class TesttoLowerCase(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: "Hello"
        # Output: "hello"

        self.assertEqual(Solution.toLowerCase("Hello"), "hello")

    def test_2(self):
        # For sanity checking:
        # Input: "here"
        # Output: "here"

        self.assertEqual(Solution.toLowerCase("here"), "here")

    def test_3(self):
        # For sanity checking:
        # Input: "LOVELY"
        # Output: "lovely"

        self.assertEqual(Solution.toLowerCase("LOVELY"), "lovely")


if __name__ == "__main__":
    unittest.main()
