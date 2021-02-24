import unittest

from Python3.averagesalaryexcludingtheminimumandmaximumsalary import Solution


class Testaverage(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: salary = [4000,3000,1000,2000]
        # Output: 2500.00000

        self.assertEqual(Solution.average([4000, 3000, 1000, 2000]), 2500.00000)

    def test_2(self):
        # For sanity checking:
        # Input: salary = [1000,2000,3000]
        # Output: 2000.00000

        self.assertEqual(Solution.average([1000, 2000, 3000]), 2000.00000)

    def test_3(self):
        # For sanity checking:
        # Input: salary = [6000,5000,4000,3000,2000,1000]
        # Output: 3500.00000

        self.assertEqual(
            Solution.average([6000, 5000, 4000, 3000, 2000, 1000]), 3500.00000
        )

    def test_4(self):
        # For sanity checking:
        # Input: salary = [8000,9000,2000,3000,6000,1000]
        # Output: 4750.00000

        self.assertEqual(
            Solution.average([8000, 9000, 2000, 3000, 6000, 1000]), 4750.00000
        )


if __name__ == "__main__":
    unittest.main()
