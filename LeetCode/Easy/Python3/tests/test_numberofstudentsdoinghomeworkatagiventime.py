import unittest

from Python3.numberofstudentsdoinghomeworkatagiventime import Solution


class TestbusyStudent(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: startTime = [1,2,3], endTime = [3,2,7], queryTime = 4
        # Output: 1

        self.assertEqual(Solution.busyStudent([1, 2, 3], [3, 2, 7], 4), 1)

    def test_2(self):
        # For sanity checking:
        # Input: startTime = [4], endTime = [4], queryTime = 4
        # Output: 1

        self.assertEqual(Solution.busyStudent([4], [4], 4), 1)

    def test_3(self):
        # For sanity checking:
        # Input: startTime = [4], endTime = [4], queryTime = 5
        # Output: 0

        self.assertEqual(Solution.busyStudent([4], [4], 5), 0)

    def test_4(self):
        # For sanity checking:
        # Input: startTime = [1,1,1,1], endTime = [1,3,2,4], queryTime = 7
        # Output: 0

        self.assertEqual(Solution.busyStudent([1, 1, 1, 1], [1, 3, 2, 4], 7), 0)

    def test_5(self):
        # For sanity checking:
        # Input: startTime = [9,8,7,6,5,4,3,2,1], endTime = [10,10,10,10,10,10,10,10,10], queryTime = 5
        # Output: 5

        self.assertEqual(
            Solution.busyStudent(
                [9, 8, 7, 6, 5, 4, 3, 2, 1], [10, 10, 10, 10, 10, 10, 10, 10, 10], 5
            ),
            5,
        )


if __name__ == "__main__":
    unittest.main()
