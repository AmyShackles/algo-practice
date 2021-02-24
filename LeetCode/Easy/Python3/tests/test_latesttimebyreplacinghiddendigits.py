import unittest

from Python3.latesttimebyreplacinghiddendigits import Solution


class TestmaximumTime(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: time = "2?:?0"
        # Output: "23:50"

        self.assertEqual(Solution.maximumTime("2?:?0"), "23:50")

    def test_2(self):
        # For sanity checking:
        # Input: time = "0?:3?"
        # Output: "09:39"

        self.assertEqual(Solution.maximumTime("0?:3?"), "09:39")

    def test_3(self):
        # For sanity checking:
        # Input: time = "1?:22"
        # Output: "19:22"

        self.assertEqual(Solution.maximumTime("1?:22"), "19:22")


if __name__ == "__main__":
    unittest.main()
