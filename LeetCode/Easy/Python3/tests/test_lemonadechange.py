import unittest

from Python3.lemonadechange import Solution


class TestlemonadeChange(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: [5,5,5,10,20]
        # Output: true

        self.assertEqual(Solution.lemonadeChange([5, 5, 5, 10, 20]), true)

    def test_2(self):
        # For sanity checking:
        # Input: [5,5,10]
        # Output: true

        self.assertEqual(Solution.lemonadeChange([5, 5, 10]), true)

    def test_3(self):
        # For sanity checking:
        # Input: [10,10]
        # Output: false

        self.assertEqual(Solution.lemonadeChange([10, 10]), false)

    def test_4(self):
        # For sanity checking:
        # Input: [5,5,10,10,20]
        # Output: false

        self.assertEqual(Solution.lemonadeChange([5, 5, 10, 10, 20]), false)


if __name__ == "__main__":
    unittest.main()
