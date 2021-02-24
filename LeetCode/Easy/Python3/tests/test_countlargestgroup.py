import unittest

from Python3.countlargestgroup import Solution


class TestcountLargestGroup(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: n = 13
        # Output: 4

        self.assertEqual(Solution.countLargestGroup(13), 4)

    def test_2(self):
        # For sanity checking:
        # Input: n = 2
        # Output: 2

        self.assertEqual(Solution.countLargestGroup(2), 2)

    def test_3(self):
        # For sanity checking:
        # Input: n = 15
        # Output: 6

        self.assertEqual(Solution.countLargestGroup(15), 6)

    def test_4(self):
        # For sanity checking:
        # Input: n = 24
        # Output: 5

        self.assertEqual(Solution.countLargestGroup(24), 5)


if __name__ == "__main__":
    unittest.main()
