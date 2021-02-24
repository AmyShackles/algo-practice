import unittest

from Python3.slowestkey import Solution


class TestslowestKey(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: releaseTimes = [9,29,49,50], keysPressed = "cbcd"
        # Output: "c"

        self.assertEqual(Solution.slowestKey([9, 29, 49, 50], "cbcd"), "c")

    def test_2(self):
        # For sanity checking:
        # Input: releaseTimes = [12,23,36,46,62], keysPressed = "spuda"
        # Output: "a"

        self.assertEqual(Solution.slowestKey([12, 23, 36, 46, 62], "spuda"), "a")


if __name__ == "__main__":
    unittest.main()
