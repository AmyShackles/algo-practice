import unittest

from Python3.checkifnanditsdoubleexist import Solution


class TestcheckIfExist(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: arr = [10,2,5,3]
        # Output: true

        self.assertEqual(Solution.checkIfExist([10, 2, 5, 3]), true)

    def test_2(self):
        # For sanity checking:
        # Input: arr = [7,1,14,11]
        # Output: true

        self.assertEqual(Solution.checkIfExist([7, 1, 14, 11]), true)

    def test_3(self):
        # For sanity checking:
        # Input: arr = [3,1,7,11]
        # Output: false

        self.assertEqual(Solution.checkIfExist([3, 1, 7, 11]), false)


if __name__ == "__main__":
    unittest.main()
