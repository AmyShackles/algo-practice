const { findLUSlength } = require("../longestUncommonSubsequenceI.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("findLUSlength", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: a = "aba", b = "cdc"
            Output: 3
            */
            const expected = 3;
            const actual = findLUSlength("aba","cdc");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: a = "aaa", b = "bbb"
            Output: 3
            */
            const expected = 3;
            const actual = findLUSlength("aaa","bbb");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: a = "aaa", b = "aaa"
            Output: -1
            */
            const expected = -1;
            const actual = findLUSlength("aaa","aaa");
            expect(actual).to.deep.equal(expected);
        });
    });
