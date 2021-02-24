import unittest

from Python3.elementappearingmorethan25insortedarray import Solution


class TestfindSpecialInteger(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: arr = [1,2,2,6,6,6,6,7,10]
        # Output: 6

        self.assertEqual(Solution.findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10]), 6)


if __name__ == "__main__":
    unittest.main()
