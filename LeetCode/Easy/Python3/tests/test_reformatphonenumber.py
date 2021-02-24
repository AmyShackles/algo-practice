import unittest

from Python3.reformatphonenumber import Solution


class TestreformatNumber(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: number = "1-23-45 6"
        # Output: "123-456"

        self.assertEqual(Solution.reformatNumber("1-23-45 6"), "123-456")

    def test_2(self):
        # For sanity checking:
        # Input: number = "123 4-567"
        # Output: "123-45-67"

        self.assertEqual(Solution.reformatNumber("123 4-567"), "123-45-67")

    def test_3(self):
        # For sanity checking:
        # Input: number = "123 4-5678"
        # Output: "123-456-78"

        self.assertEqual(Solution.reformatNumber("123 4-5678"), "123-456-78")

    def test_4(self):
        # For sanity checking:
        # Input: number = "12"
        # Output: "12"

        self.assertEqual(Solution.reformatNumber("12"), "12")

    def test_5(self):
        # For sanity checking:
        # Input: number = "--17-5 229 35-39475 "
        # Output: "175-229-353-94-75"

        self.assertEqual(
            Solution.reformatNumber("--17-5 229 35-39475 "), "175-229-353-94-75"
        )


if __name__ == "__main__":
    unittest.main()
