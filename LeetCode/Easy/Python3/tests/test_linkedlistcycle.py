import unittest

from Python3.linkedlistcycle import Solution


class TesthasCycle(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: head = [3,2,0,-4], pos = 1
        # Output: true

        self.assertEqual(Solution.hasCycle([3, 2, 0, -4], 1), true)

    def test_2(self):
        # For sanity checking:
        # Input: head = [1,2], pos = 0
        # Output: true

        self.assertEqual(Solution.hasCycle([1, 2], 0), true)

    def test_3(self):
        # For sanity checking:
        # Input: head = [1], pos = -1
        # Output: false

        self.assertEqual(Solution.hasCycle([1], -1), false)


if __name__ == "__main__":
    unittest.main()
