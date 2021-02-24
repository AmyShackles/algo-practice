import unittest

from Python3.destinationcity import Solution


class TestdestCity(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
        # Output: "Sao Paulo"

        self.assertEqual(
            Solution.destCity(
                [["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]]
            ),
            "Sao Paulo",
        )

    def test_2(self):
        # For sanity checking:
        # Input: paths = [["B","C"],["D","B"],["C","A"]]
        # Output: "A"

        self.assertEqual(Solution.destCity([["B", "C"], ["D", "B"], ["C", "A"]]), "A")

    def test_3(self):
        # For sanity checking:
        # Input: paths = [["A","Z"]]
        # Output: "Z"

        self.assertEqual(Solution.destCity([["A", "Z"]]), "Z")


if __name__ == "__main__":
    unittest.main()
