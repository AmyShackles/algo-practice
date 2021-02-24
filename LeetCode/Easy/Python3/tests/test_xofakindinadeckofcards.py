import unittest

from Python3.xofakindinadeckofcards import Solution


class TesthasGroupsSizeX(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: deck = [1,2,3,4,4,3,2,1]
        # Output: true

        self.assertEqual(Solution.hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1]), true)

    def test_2(self):
        # For sanity checking:
        # Input: deck = [1,1,1,2,2,2,3,3]
        # Output: false´

        self.assertEqual(Solution.hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3]), false)

    def test_3(self):
        # For sanity checking:
        # Input: deck = [1]
        # Output: false

        self.assertEqual(Solution.hasGroupsSizeX([1]), false)

    def test_4(self):
        # For sanity checking:
        # Input: deck = [1,1]
        # Output: true

        self.assertEqual(Solution.hasGroupsSizeX([1, 1]), true)

    def test_5(self):
        # For sanity checking:
        # Input: deck = [1,1,2,2,2,2]
        # Output: true

        self.assertEqual(Solution.hasGroupsSizeX([1, 1, 2, 2, 2, 2]), true)


if __name__ == "__main__":
    unittest.main()
