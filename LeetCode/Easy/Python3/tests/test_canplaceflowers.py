import unittest

from Python3.canplaceflowers import Solution


class TestcanPlaceFlowers(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: flowerbed = [1,0,0,0,1], n = 1
        # Output: true

        self.assertEqual(Solution.canPlaceFlowers([1, 0, 0, 0, 1], 1), true)

    def test_2(self):
        # For sanity checking:
        # Input: flowerbed = [1,0,0,0,1], n = 2
        # Output: false

        self.assertEqual(Solution.canPlaceFlowers([1, 0, 0, 0, 1], 2), false)


if __name__ == "__main__":
    unittest.main()
