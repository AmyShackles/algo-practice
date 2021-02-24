import unittest

from Python3.minimumindexsumoftwolists import Solution


class TestfindRestaurant(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
        # Output: ["Shogun"]

        self.assertEqual(
            Solution.findRestaurant(
                ["Shogun", "Tapioca Express", "Burger King", "KFC"],
                [
                    "Piatti",
                    "The Grill at Torrey Pines",
                    "Hungry Hunter Steakhouse",
                    "Shogun",
                ],
            ),
            ["Shogun"],
        )

    def test_2(self):
        # For sanity checking:
        # Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
        # Output: ["Shogun"]

        self.assertEqual(
            Solution.findRestaurant(
                ["Shogun", "Tapioca Express", "Burger King", "KFC"],
                ["KFC", "Shogun", "Burger King"],
            ),
            ["Shogun"],
        )

    def test_3(self):
        # For sanity checking:
        # Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Burger King","Tapioca Express","Shogun"]
        # Output: ["KFC","Burger King","Tapioca Express","Shogun"]

        self.assertEqual(
            Solution.findRestaurant(
                ["Shogun", "Tapioca Express", "Burger King", "KFC"],
                ["KFC", "Burger King", "Tapioca Express", "Shogun"],
            ),
            ["KFC", "Burger King", "Tapioca Express", "Shogun"],
        )

    def test_4(self):
        # For sanity checking:
        # Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KNN","KFC","Burger King","Tapioca Express","Shogun"]
        # Output: ["KFC","Burger King","Tapioca Express","Shogun"]

        self.assertEqual(
            Solution.findRestaurant(
                ["Shogun", "Tapioca Express", "Burger King", "KFC"],
                ["KNN", "KFC", "Burger King", "Tapioca Express", "Shogun"],
            ),
            ["KFC", "Burger King", "Tapioca Express", "Shogun"],
        )

    def test_5(self):
        # For sanity checking:
        # Input: list1 = ["KFC"], list2 = ["KFC"]
        # Output: ["KFC"]

        self.assertEqual(Solution.findRestaurant(["KFC"], ["KFC"]), ["KFC"])


if __name__ == "__main__":
    unittest.main()
