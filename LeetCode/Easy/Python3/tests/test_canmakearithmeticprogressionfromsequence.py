import unittest

from Python3.canmakearithmeticprogressionfromsequence import Solution


class TestcanMakeArithmeticProgression(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: arr = [3,5,1]
        # Output: true

        self.assertEqual(Solution.canMakeArithmeticProgression([3, 5, 1]), true)

    def test_2(self):
        # For sanity checking:
        # Input: arr = [1,2,4]
        # Output: false

        self.assertEqual(Solution.canMakeArithmeticProgression([1, 2, 4]), false)


if __name__ == "__main__":
    unittest.main()
