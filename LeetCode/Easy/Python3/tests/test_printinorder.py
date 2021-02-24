import unittest

from Python3.printinorder import Foo


class Test__init__(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: [1,2,3]
        # Output: "firstsecondthird"

        self.assertEqual(Foo.__init__([1, 2, 3]), "firstsecondthird")

    def test_2(self):
        # For sanity checking:
        # Input: [1,3,2]
        # Output: "firstsecondthird"

        self.assertEqual(Foo.__init__([1, 3, 2]), "firstsecondthird")


if __name__ == "__main__":
    unittest.main()
