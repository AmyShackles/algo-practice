import unittest

from Python3.happynumber import Solution


class TestisHappy(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: n = 19
        # Output: true

        self.assertEqual(Solution.isHappy(19), true)

    def test_2(self):
        # For sanity checking:
        # Input: n = 2
        # Output: false

        self.assertEqual(Solution.isHappy(2), false)


if __name__ == "__main__":
    unittest.main()
