const { gcdOfStrings } = require("../greatestCommonDivisorOfStrings.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("gcdOfStrings", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: str1 = "ABCABC", str2 = "ABC"
            Output: "ABC"
            */
            const expected = "ABC";
            const actual = gcdOfStrings("ABCABC","ABC");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: str1 = "ABABAB", str2 = "ABAB"
            Output: "AB"
            */
            const expected = "AB";
            const actual = gcdOfStrings("ABABAB","ABAB");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: str1 = "LEET", str2 = "CODE"
            Output: ""
            */
            const expected = "";
            const actual = gcdOfStrings("LEET","CODE");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: str1 = "ABCDEF", str2 = "ABC"
            Output: ""
            */
            const expected = "";
            const actual = gcdOfStrings("ABCDEF","ABC");
            expect(actual).to.deep.equal(expected);
        });
    });
