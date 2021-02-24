import unittest

from Python3.maxconsecutiveones import Solution


class TestfindMaxConsecutiveOnes(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: [1,1,0,1,1,1]
        # Output: 3

        self.assertEqual(Solution.findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]), 3)


if __name__ == "__main__":
    unittest.main()
