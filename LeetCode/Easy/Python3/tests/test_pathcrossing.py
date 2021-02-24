import unittest

from Python3.pathcrossing import Solution


class TestisPathCrossing(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: path = "NES"
        # Output: false

        self.assertEqual(Solution.isPathCrossing("NES"), false)

    def test_2(self):
        # For sanity checking:
        # Input: path = "NESWW"
        # Output: true

        self.assertEqual(Solution.isPathCrossing("NESWW"), true)


if __name__ == "__main__":
    unittest.main()
