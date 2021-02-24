import unittest

from Python3.majorityelement import Solution


class TestmajorityElement(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums = [3,2,3]
        # Output: 3

        self.assertEqual(Solution.majorityElement([3, 2, 3]), 3)

    def test_2(self):
        # For sanity checking:
        # Input: nums = [2,2,1,1,1,2,2]
        # Output: 2

        self.assertEqual(Solution.majorityElement([2, 2, 1, 1, 1, 2, 2]), 2)


if __name__ == "__main__":
    unittest.main()
