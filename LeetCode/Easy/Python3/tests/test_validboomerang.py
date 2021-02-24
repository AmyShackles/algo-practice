import unittest

from Python3.validboomerang import Solution


class TestisBoomerang(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: [[1,1],[2,3],[3,2]]
        # Output: true

        self.assertEqual(Solution.isBoomerang([[1, 1], [2, 3], [3, 2]]), true)


if __name__ == "__main__":
    unittest.main()
