import unittest

from Python3.sumofevennumbersafterqueries import Solution


class TestsumEvenAfterQueries(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: A = [1,2,3,4], queries = [[1,0],[-3,1],[-4,0],[2,3]]
        # Output: [8,6,2,4]

        self.assertEqual(
            Solution.sumEvenAfterQueries(
                [1, 2, 3, 4], [[1, 0], [-3, 1], [-4, 0], [2, 3]]
            ),
            [8, 6, 2, 4],
        )


if __name__ == "__main__":
    unittest.main()
