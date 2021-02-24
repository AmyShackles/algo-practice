const { findTheDifference } = require("../findTheDifference.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("findTheDifference", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: s = "abcd", t = "abcde"
            Output: "e"
            */
            const expected = "e";
            const actual = findTheDifference("abcd","abcde");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: s = "", t = "y"
            Output: "y"
            */
            const expected = "y";
            const actual = findTheDifference("","y");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: s = "a", t = "aa"
            Output: "a"
            */
            const expected = "a";
            const actual = findTheDifference("a","aa");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: s = "ae", t = "aea"
            Output: "a"
            */
            const expected = "a";
            const actual = findTheDifference("ae","aea");
            expect(actual).to.deep.equal(expected);
        });
    });
