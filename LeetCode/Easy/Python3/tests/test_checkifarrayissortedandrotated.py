import unittest

from Python3.checkifarrayissortedandrotated import Solution


class Testcheck(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums = [3,4,5,1,2]
        # Output: true

        self.assertEqual(Solution.check([3, 4, 5, 1, 2]), true)

    def test_2(self):
        # For sanity checking:
        # Input: nums = [2,1,3,4]
        # Output: false

        self.assertEqual(Solution.check([2, 1, 3, 4]), false)

    def test_3(self):
        # For sanity checking:
        # Input: nums = [1,2,3]
        # Output: true

        self.assertEqual(Solution.check([1, 2, 3]), true)

    def test_4(self):
        # For sanity checking:
        # Input: nums = [1,1,1]
        # Output: true

        self.assertEqual(Solution.check([1, 1, 1]), true)

    def test_5(self):
        # For sanity checking:
        # Input: nums = [2,1]
        # Output: true

        self.assertEqual(Solution.check([2, 1]), true)


if __name__ == "__main__":
    unittest.main()
