import unittest

from Python3.robotreturntoorigin import Solution


class TestjudgeCircle(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: moves = "UD"
        # Output: true

        self.assertEqual(Solution.judgeCircle("UD"), true)

    def test_2(self):
        # For sanity checking:
        # Input: moves = "LL"
        # Output: false

        self.assertEqual(Solution.judgeCircle("LL"), false)

    def test_3(self):
        # For sanity checking:
        # Input: moves = "RRDD"
        # Output: false

        self.assertEqual(Solution.judgeCircle("RRDD"), false)

    def test_4(self):
        # For sanity checking:
        # Input: moves = "LDRRLRUULR"
        # Output: false

        self.assertEqual(Solution.judgeCircle("LDRRLRUULR"), false)


if __name__ == "__main__":
    unittest.main()
