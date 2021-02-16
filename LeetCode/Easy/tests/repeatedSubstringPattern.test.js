const { repeatedSubstringPattern } = require("../repeatedSubstringPattern.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("repeatedSubstringPattern", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: s = "abab"
            Output: true
            */
            const expected = true;
            const actual = repeatedSubstringPattern("abab");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: s = "aba"
            Output: false
            */
            const expected = false;
            const actual = repeatedSubstringPattern("aba");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: s = "abcabcabcabc"
            Output: true
            */
            const expected = true;
            const actual = repeatedSubstringPattern("abcabcabcabc");
            expect(actual).to.deep.equal(expected);
        });
    });
