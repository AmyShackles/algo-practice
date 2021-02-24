import unittest

from Python3.crawlerlogfolder import Solution


class TestminOperations(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: logs = ["d1/","d2/","../","d21/","./"]
        # Output: 2

        self.assertEqual(Solution.minOperations(["d1/", "d2/", "../", "d21/", "./"]), 2)

    def test_2(self):
        # For sanity checking:
        # Input: logs = ["d1/","d2/","./","d3/","../","d31/"]
        # Output: 3

        self.assertEqual(
            Solution.minOperations(["d1/", "d2/", "./", "d3/", "../", "d31/"]), 3
        )

    def test_3(self):
        # For sanity checking:
        # Input: logs = ["d1/","../","../","../"]
        # Output: 0

        self.assertEqual(Solution.minOperations(["d1/", "../", "../", "../"]), 0)


if __name__ == "__main__":
    unittest.main()
