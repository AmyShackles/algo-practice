import unittest

from Python3.replaceelementswithgreatestelementonrightside import Solution


class TestreplaceElements(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: arr = [17,18,5,4,6,1]
        # Output: [18,6,6,6,1,-1]

        self.assertEqual(
            Solution.replaceElements([17, 18, 5, 4, 6, 1]), [18, 6, 6, 6, 1, -1]
        )

    def test_2(self):
        # For sanity checking:
        # Input: arr = [400]
        # Output: [-1]

        self.assertEqual(Solution.replaceElements([400]), [-1])


if __name__ == "__main__":
    unittest.main()
