import unittest

from Python3.employeeimportance import Employee


class Test__init__(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: [[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1
        # Output: 11

        self.assertEqual(
            Employee.__init__([[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1), 11
        )


if __name__ == "__main__":
    unittest.main()
