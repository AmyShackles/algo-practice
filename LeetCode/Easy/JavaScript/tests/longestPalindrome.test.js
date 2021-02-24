const { longestPalindrome } = require("../longestPalindrome.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("longestPalindrome", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: s = "abccccdd"
            Output: 7
            */
            const expected = 7;
            const actual = longestPalindrome("abccccdd");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: s = "a"
            Output: 1
            */
            const expected = 1;
            const actual = longestPalindrome("a");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: s = "bb"
            Output: 2
            */
            const expected = 2;
            const actual = longestPalindrome("bb");
            expect(actual).to.deep.equal(expected);
        });
    });
