import unittest

from Python3.decodexoredarray import Solution


class Testdecode(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: encoded = [1,2,3], first = 1
        # Output: [1,0,2,1]

        self.assertEqual(Solution.decode([1, 2, 3], 1), [1, 0, 2, 1])

    def test_2(self):
        # For sanity checking:
        # Input: encoded = [6,2,7,3], first = 4
        # Output: [4,2,0,7,4]

        self.assertEqual(Solution.decode([6, 2, 7, 3], 4), [4, 2, 0, 7, 4])


if __name__ == "__main__":
    unittest.main()
