const { numUniqueEmails } = require("../uniqueEmailAddresses.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("numUniqueEmails", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
            Output: 2
            */
            const expected = 2;
            const actual = numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]);
            expect(actual).to.deep.equal(expected);
        });
    });
