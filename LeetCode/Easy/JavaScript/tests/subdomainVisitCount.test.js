const { subdomainVisits } = require("../subdomainVisitCount.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("subdomainVisits", () => {
    it("should return the right value for Example 1", () => {
        /*
            Input: 
            ["9001 discuss.leetcode.com"]
            Output: 
            ["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]
        */
        const expected = ["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"];
        const actual = subdomainVisits(["9001 discuss.leetcode.com"]);
        expect(actual).to.deep.equal(expected);
    })
    it("should return the right value for Example 2", () => {
        /*
            Input: 
            ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]
            Output: 
            ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]
        */
        const expected = ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"];
        const actual = subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]);
        expect(actual).to.deep.equal(expected);
    })
});
