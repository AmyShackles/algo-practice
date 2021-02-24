import unittest

from Python3.goalparserinterpretation import Solution


class Testinterpret(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: command = "G()(al)"
        # Output: "Goal"

        self.assertEqual(Solution.interpret("G()(al)"), "Goal")

    def test_2(self):
        # For sanity checking:
        # Input: command = "G()()()()(al)"
        # Output: "Gooooal"

        self.assertEqual(Solution.interpret("G()()()()(al)"), "Gooooal")

    def test_3(self):
        # For sanity checking:
        # Input: command = "(al)G(al)()()G"
        # Output: "alGalooG"

        self.assertEqual(Solution.interpret("(al)G(al)()()G"), "alGalooG")


if __name__ == "__main__":
    unittest.main()
