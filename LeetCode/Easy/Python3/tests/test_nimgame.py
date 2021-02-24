import unittest

from Python3.nimgame import Solution


class TestcanWinNim(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: n = 4
        # Output: false

        self.assertEqual(Solution.canWinNim(4), false)

    def test_2(self):
        # For sanity checking:
        # Input: n = 1
        # Output: true

        self.assertEqual(Solution.canWinNim(1), true)

    def test_3(self):
        # For sanity checking:
        # Input: n = 2
        # Output: true

        self.assertEqual(Solution.canWinNim(2), true)


if __name__ == "__main__":
    unittest.main()
