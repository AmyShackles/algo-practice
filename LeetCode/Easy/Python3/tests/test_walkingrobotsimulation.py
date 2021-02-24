import unittest

from Python3.walkingrobotsimulation import Solution


class TestrobotSim(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: commands = [4,-1,3], obstacles = []
        # Output: 25

        self.assertEqual(Solution.robotSim([4, -1, 3], []), 25)

    def test_2(self):
        # For sanity checking:
        # Input: commands = [4,-1,4,-2,4], obstacles = [[2,4]]
        # Output: 65

        self.assertEqual(Solution.robotSim([4, -1, 4, -2, 4], [[2, 4]]), 65)


if __name__ == "__main__":
    unittest.main()
