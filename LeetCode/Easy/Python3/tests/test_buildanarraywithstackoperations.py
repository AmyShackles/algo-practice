import unittest

from Python3.buildanarraywithstackoperations import Solution


class TestbuildArray(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: target = [1,3], n = 3
        # Output: ["Push","Push","Pop","Push"]

        self.assertEqual(
            Solution.buildArray([1, 3], 3), ["Push", "Push", "Pop", "Push"]
        )

    def test_2(self):
        # For sanity checking:
        # Input: target = [1,2,3], n = 3
        # Output: ["Push","Push","Push"]

        self.assertEqual(Solution.buildArray([1, 2, 3], 3), ["Push", "Push", "Push"])

    def test_3(self):
        # For sanity checking:
        # Input: target = [1,2], n = 4
        # Output: ["Push","Push"]

        self.assertEqual(Solution.buildArray([1, 2], 4), ["Push", "Push"])

    def test_4(self):
        # For sanity checking:
        # Input: target = [2,3,4], n = 4
        # Output: ["Push","Pop","Push","Push","Push"]

        self.assertEqual(
            Solution.buildArray([2, 3, 4], 4), ["Push", "Pop", "Push", "Push", "Push"]
        )


if __name__ == "__main__":
    unittest.main()
