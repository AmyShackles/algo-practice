import unittest

from Python3.maximumnumberofballoons import Solution


class TestmaxNumberOfBalloons(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: text = "nlaebolko"
        # Output: 1

        self.assertEqual(Solution.maxNumberOfBalloons("nlaebolko"), 1)

    def test_2(self):
        # For sanity checking:
        # Input: text = "loonbalxballpoon"
        # Output: 2

        self.assertEqual(Solution.maxNumberOfBalloons("loonbalxballpoon"), 2)

    def test_3(self):
        # For sanity checking:
        # Input: text = "leetcode"
        # Output: 0

        self.assertEqual(Solution.maxNumberOfBalloons("leetcode"), 0)


if __name__ == "__main__":
    unittest.main()
