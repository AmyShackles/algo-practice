import unittest

from Python3.longpressedname import Solution


class TestisLongPressedName(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: name = "alex", typed = "aaleex"
        # Output: true

        self.assertEqual(Solution.isLongPressedName("alex", "aaleex"), true)

    def test_2(self):
        # For sanity checking:
        # Input: name = "saeed", typed = "ssaaedd"
        # Output: false

        self.assertEqual(Solution.isLongPressedName("saeed", "ssaaedd"), false)

    def test_3(self):
        # For sanity checking:
        # Input: name = "leelee", typed = "lleeelee"
        # Output: true

        self.assertEqual(Solution.isLongPressedName("leelee", "lleeelee"), true)

    def test_4(self):
        # For sanity checking:
        # Input: name = "laiden", typed = "laiden"
        # Output: true

        self.assertEqual(Solution.isLongPressedName("laiden", "laiden"), true)


if __name__ == "__main__":
    unittest.main()
