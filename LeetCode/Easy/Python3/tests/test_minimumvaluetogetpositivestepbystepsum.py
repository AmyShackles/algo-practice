import unittest

from Python3.minimumvaluetogetpositivestepbystepsum import Solution


class TestminStartValue(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums = [-3,2,-3,4,2]
        # Output: 5

        self.assertEqual(Solution.minStartValue([-3, 2, -3, 4, 2]), 5)

    def test_2(self):
        # For sanity checking:
        # Input: nums = [1,2]
        # Output: 1

        self.assertEqual(Solution.minStartValue([1, 2]), 1)

    def test_3(self):
        # For sanity checking:
        # Input: nums = [1,-2,-3]
        # Output: 5

        self.assertEqual(Solution.minStartValue([1, -2, -3]), 5)


if __name__ == "__main__":
    unittest.main()
