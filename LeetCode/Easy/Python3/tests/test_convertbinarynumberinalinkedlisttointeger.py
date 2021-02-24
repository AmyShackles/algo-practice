import unittest

from Python3.convertbinarynumberinalinkedlisttointeger import Solution


class TestgetDecimalValue(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: head = [1,0,1]
        # Output: 5

        self.assertEqual(Solution.getDecimalValue([1, 0, 1]), 5)

    def test_2(self):
        # For sanity checking:
        # Input: head = [0]
        # Output: 0

        self.assertEqual(Solution.getDecimalValue([0]), 0)

    def test_3(self):
        # For sanity checking:
        # Input: head = [1]
        # Output: 1

        self.assertEqual(Solution.getDecimalValue([1]), 1)

    def test_4(self):
        # For sanity checking:
        # Input: head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
        # Output: 18880

        self.assertEqual(
            Solution.getDecimalValue([1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]),
            18880,
        )

    def test_5(self):
        # For sanity checking:
        # Input: head = [0,0]
        # Output: 0

        self.assertEqual(Solution.getDecimalValue([0, 0]), 0)


if __name__ == "__main__":
    unittest.main()
