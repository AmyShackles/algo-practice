import unittest

from Python3.studentattendancerecordi import Solution


class TestcheckRecord(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: "PPALLP"
        # Output: True

        self.assertEqual(Solution.checkRecord("PPALLP"), True)

    def test_2(self):
        # For sanity checking:
        # Input: "PPALLL"
        # Output: False

        self.assertEqual(Solution.checkRecord("PPALLL"), False)


if __name__ == "__main__":
    unittest.main()
