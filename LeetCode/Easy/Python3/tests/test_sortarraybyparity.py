import unittest

from Python3.sortarraybyparity import Solution


class TestsortArrayByParity(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: [3,1,2,4]
        # Output: [2,4,3,1]

        self.assertEqual(Solution.sortArrayByParity([3, 1, 2, 4]), [2, 4, 3, 1])


if __name__ == "__main__":
    unittest.main()
