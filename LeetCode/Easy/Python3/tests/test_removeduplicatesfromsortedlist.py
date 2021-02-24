import unittest

from Python3.removeduplicatesfromsortedlist import Solution


class TestdeleteDuplicates(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: head = [1,1,2]
        # Output: [1,2]

        self.assertEqual(Solution.deleteDuplicates([1, 1, 2]), [1, 2])

    def test_2(self):
        # For sanity checking:
        # Input: head = [1,1,2,3,3]
        # Output: [1,2,3]

        self.assertEqual(Solution.deleteDuplicates([1, 1, 2, 3, 3]), [1, 2, 3])


if __name__ == "__main__":
    unittest.main()
