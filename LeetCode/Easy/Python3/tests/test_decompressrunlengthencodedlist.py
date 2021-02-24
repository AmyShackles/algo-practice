import unittest

from Python3.decompressrunlengthencodedlist import Solution


class TestdecompressRLElist(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: nums = [1,2,3,4]
        # Output: [2,4,4,4]

        self.assertEqual(Solution.decompressRLElist([1, 2, 3, 4]), [2, 4, 4, 4])

    def test_2(self):
        # For sanity checking:
        # Input: nums = [1,1,2,3]
        # Output: [1,3,3]

        self.assertEqual(Solution.decompressRLElist([1, 1, 2, 3]), [1, 3, 3])


if __name__ == "__main__":
    unittest.main()
