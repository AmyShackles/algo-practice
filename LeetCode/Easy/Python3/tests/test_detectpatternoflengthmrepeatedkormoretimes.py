import unittest

from Python3.detectpatternoflengthmrepeatedkormoretimes import Solution


class TestcontainsPattern(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: arr = [1,2,4,4,4,4], m = 1, k = 3
        # Output: true

        self.assertEqual(Solution.containsPattern([1, 2, 4, 4, 4, 4], 1, 3), true)

    def test_2(self):
        # For sanity checking:
        # Input: arr = [1,2,1,2,1,1,1,3], m = 2, k = 2
        # Output: true

        self.assertEqual(Solution.containsPattern([1, 2, 1, 2, 1, 1, 1, 3], 2, 2), true)

    def test_3(self):
        # For sanity checking:
        # Input: arr = [1,2,1,2,1,3], m = 2, k = 3
        # Output: false

        self.assertEqual(Solution.containsPattern([1, 2, 1, 2, 1, 3], 2, 3), false)

    def test_4(self):
        # For sanity checking:
        # Input: arr = [1,2,3,1,2], m = 2, k = 2
        # Output: false

        self.assertEqual(Solution.containsPattern([1, 2, 3, 1, 2], 2, 2), false)

    def test_5(self):
        # For sanity checking:
        # Input: arr = [2,2,2,2], m = 2, k = 3
        # Output: false

        self.assertEqual(Solution.containsPattern([2, 2, 2, 2], 2, 3), false)


if __name__ == "__main__":
    unittest.main()
