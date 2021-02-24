import unittest

from Python3.checkifall1sareatleastlengthkplacesaway import Solution


class TestkLengthApart(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums = [1,0,0,0,1,0,0,1], k = 2
        # Output: true

        self.assertEqual(Solution.kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2), true)

    def test_2(self):
        # For sanity checking:
        # Input: nums = [1,0,0,1,0,1], k = 2
        # Output: false

        self.assertEqual(Solution.kLengthApart([1, 0, 0, 1, 0, 1], 2), false)

    def test_3(self):
        # For sanity checking:
        # Input: nums = [1,1,1,1,1], k = 0
        # Output: true

        self.assertEqual(Solution.kLengthApart([1, 1, 1, 1, 1], 0), true)

    def test_4(self):
        # For sanity checking:
        # Input: nums = [0,1,0,1], k = 1
        # Output: true

        self.assertEqual(Solution.kLengthApart([0, 1, 0, 1], 1), true)


if __name__ == "__main__":
    unittest.main()
