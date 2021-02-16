const { removePalindromeSub } = require("../removePalindromicSubsequences.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("removePalindromeSub", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: s = "ababa"
            Output: 1
            */
            const expected = 1;
            const actual = removePalindromeSub("ababa");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: s = "abb"
            Output: 2
            */
            const expected = 2;
            const actual = removePalindromeSub("abb");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: s = "baabb"
            Output: 2
            */
            const expected = 2;
            const actual = removePalindromeSub("baabb");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: s = ""
            Output: 0
            */
            const expected = 0;
            const actual = removePalindromeSub("");
            expect(actual).to.deep.equal(expected);
        });
    });
