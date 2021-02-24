import unittest

from Python3.laststoneweight import Solution


class TestlastStoneWeight(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: [2,7,4,1,8,1]
        # Output: 1

        self.assertEqual(Solution.lastStoneWeight([2, 7, 4, 1, 8, 1]), 1)


if __name__ == "__main__":
    unittest.main()
