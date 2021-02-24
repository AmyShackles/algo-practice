import unittest

from Python3.rotatestring import Solution


class TestrotateString(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: A = 'abcde', B = 'cdeab'
        # Output: true

        self.assertEqual(Solution.rotateString("abcde", "cdeab"), true)


if __name__ == "__main__":
    unittest.main()
