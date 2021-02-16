const { validPalindrome } = require("../validPalindromeIi.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("validPalindrome", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: "aba"
            Output: True
            */
            const expected = True;
            const actual = validPalindrome("aba");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: "abca"
            Output: True
            */
            const expected = True;
            const actual = validPalindrome("abca");
            expect(actual).to.deep.equal(expected);
        });
    });
