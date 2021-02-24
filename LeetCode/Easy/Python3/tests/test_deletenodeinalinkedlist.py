import unittest

from Python3.deletenodeinalinkedlist import Solution


class TestdeleteNode(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: head = [4,5,1,9], node = 5
        # Output: [4,1,9]

        self.assertEqual(Solution.deleteNode([4, 5, 1, 9], 5), [4, 1, 9])

    def test_2(self):
        # For sanity checking:
        # Input: head = [4,5,1,9], node = 1
        # Output: [4,5,9]

        self.assertEqual(Solution.deleteNode([4, 5, 1, 9], 1), [4, 5, 9])

    def test_3(self):
        # For sanity checking:
        # Input: head = [1,2,3,4], node = 3
        # Output: [1,2,4]

        self.assertEqual(Solution.deleteNode([1, 2, 3, 4], 3), [1, 2, 4])

    def test_4(self):
        # For sanity checking:
        # Input: head = [0,1], node = 0
        # Output: [1]

        self.assertEqual(Solution.deleteNode([0, 1], 0), [1])

    def test_5(self):
        # For sanity checking:
        # Input: head = [-3,5,-99], node = -3
        # Output: [5,-99]

        self.assertEqual(Solution.deleteNode([-3, 5, -99], -3), [5, -99])


if __name__ == "__main__":
    unittest.main()
