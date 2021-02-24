import unittest

from Python3.perfectnumber import Solution


class TestcheckPerfectNumber(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: num = 28
        # Output: true

        self.assertEqual(Solution.checkPerfectNumber(28), true)

    def test_2(self):
        # For sanity checking:
        # Input: num = 6
        # Output: true

        self.assertEqual(Solution.checkPerfectNumber(6), true)

    def test_3(self):
        # For sanity checking:
        # Input: num = 496
        # Output: true

        self.assertEqual(Solution.checkPerfectNumber(496), true)

    def test_4(self):
        # For sanity checking:
        # Input: num = 8128
        # Output: true

        self.assertEqual(Solution.checkPerfectNumber(8128), true)

    def test_5(self):
        # For sanity checking:
        # Input: num = 2
        # Output: false

        self.assertEqual(Solution.checkPerfectNumber(2), false)


if __name__ == "__main__":
    unittest.main()
