import unittest

from Python3.narytreepostordertraversal import Node


class Test__init__(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: root = [1,null,3,2,4,null,5,6]
        # Output: [5,6,3,2,4,1]

        self.assertEqual(
            Node.__init__([1, null, 3, 2, 4, null, 5, 6]), [5, 6, 3, 2, 4, 1]
        )

    def test_2(self):
        # For sanity checking:
        # Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
        # Output: [2,6,14,11,7,3,12,8,4,13,9,10,5,1]

        self.assertEqual(
            Node.__init__(
                [
                    1,
                    null,
                    2,
                    3,
                    4,
                    5,
                    null,
                    null,
                    6,
                    7,
                    null,
                    8,
                    null,
                    9,
                    10,
                    null,
                    null,
                    11,
                    null,
                    12,
                    null,
                    13,
                    null,
                    null,
                    14,
                ]
            ),
            [2, 6, 14, 11, 7, 3, 12, 8, 4, 13, 9, 10, 5, 1],
        )


if __name__ == "__main__":
    unittest.main()
