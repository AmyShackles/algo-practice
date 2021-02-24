import unittest

from Python3.setmismatch import Solution


class TestfindErrorNums(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums = [1,2,2,4]
        # Output: [2,3]

        self.assertEqual(Solution.findErrorNums([1, 2, 2, 4]), [2, 3])

    def test_2(self):
        # For sanity checking:
        # Input: nums = [1,1]
        # Output: [1,2]

        self.assertEqual(Solution.findErrorNums([1, 1]), [1, 2])


if __name__ == "__main__":
    unittest.main()
