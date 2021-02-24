import unittest

from Python3.binaryprefixdivisibleby5 import Solution


class TestprefixesDivBy5(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: [0,1,1]
        # Output: [true,false,false]

        self.assertEqual(Solution.prefixesDivBy5([0, 1, 1]), [true, false, false])

    def test_2(self):
        # For sanity checking:
        # Input: [1,1,1]
        # Output: [false,false,false]

        self.assertEqual(Solution.prefixesDivBy5([1, 1, 1]), [false, false, false])

    def test_3(self):
        # For sanity checking:
        # Input: [0,1,1,1,1,1]
        # Output: [true,false,false,false,true,false]

        self.assertEqual(
            Solution.prefixesDivBy5([0, 1, 1, 1, 1, 1]),
            [true, false, false, false, true, false],
        )

    def test_4(self):
        # For sanity checking:
        # Input: [1,1,1,0,1]
        # Output: [false,false,false,false,false]

        self.assertEqual(
            Solution.prefixesDivBy5([1, 1, 1, 0, 1]),
            [false, false, false, false, false],
        )


if __name__ == "__main__":
    unittest.main()
