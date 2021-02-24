import unittest

from Python3.divisorgame import Solution


class TestdivisorGame(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: 2
        # Output: true

        self.assertEqual(Solution.divisorGame(2), true)

    def test_2(self):
        # For sanity checking:
        # Input: 3
        # Output: false

        self.assertEqual(Solution.divisorGame(3), false)


if __name__ == "__main__":
    unittest.main()
