import unittest

from Python3.distringmatch import Solution


class TestdiStringMatch(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: "IDID"
        # Output: [0,4,1,3,2]

        self.assertEqual(Solution.diStringMatch("IDID"), [0, 4, 1, 3, 2])

    def test_2(self):
        # For sanity checking:
        # Input: "III"
        # Output: [0,1,2,3]

        self.assertEqual(Solution.diStringMatch("III"), [0, 1, 2, 3])


if __name__ == "__main__":
    unittest.main()
