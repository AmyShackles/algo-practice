import unittest

from Python3.createtargetarrayinthegivenorder import Solution


class TestcreateTargetArray(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
        # Output: [0,4,1,3,2]

        self.assertEqual(
            Solution.createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]),
            [0, 4, 1, 3, 2],
        )

    def test_2(self):
        # For sanity checking:
        # Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]
        # Output: [0,1,2,3,4]

        self.assertEqual(
            Solution.createTargetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0]),
            [0, 1, 2, 3, 4],
        )

    def test_3(self):
        # For sanity checking:
        # Input: nums = [1], index = [0]
        # Output: [1]

        self.assertEqual(Solution.createTargetArray([1], [0]), [1])


if __name__ == "__main__":
    unittest.main()
