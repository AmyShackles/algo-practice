const { isSubsequence } = require("../isSubsequence.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("isSubsequence", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: s = "abc", t = "ahbgdc"
            Output: true
            */
            const expected = true;
            const actual = isSubsequence("abc","ahbgdc");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: s = "axc", t = "ahbgdc"
            Output: false
            */
            const expected = false;
            const actual = isSubsequence("axc","ahbgdc");
            expect(actual).to.deep.equal(expected);
        });
    });
