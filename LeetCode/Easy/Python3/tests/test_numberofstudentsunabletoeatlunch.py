import unittest

from Python3.numberofstudentsunabletoeatlunch import Solution


class TestcountStudents(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: students = [1,1,0,0], sandwiches = [0,1,0,1]
        # Output: 0

        self.assertEqual(Solution.countStudents([1, 1, 0, 0], [0, 1, 0, 1]), 0)

    def test_2(self):
        # For sanity checking:
        # Input: students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]
        # Output: 3

        self.assertEqual(
            Solution.countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]), 3
        )


if __name__ == "__main__":
    unittest.main()
