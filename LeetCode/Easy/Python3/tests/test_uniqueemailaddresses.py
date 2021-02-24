import unittest

from Python3.uniqueemailaddresses import Solution


class TestnumUniqueEmails(unittest.TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_1(self):
        # For sanity checking:
        # Input: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
        # Output: 2

        self.assertEqual(
            Solution.numUniqueEmails(
                [
                    "test.email+alex@leetcode.com",
                    "test.e.mail+bob.cathy@leetcode.com",
                    "testemail+david@lee.tcode.com",
                ]
            ),
            2,
        )


if __name__ == "__main__":
    unittest.main()
