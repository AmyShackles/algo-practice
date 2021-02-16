const { arrayStringsAreEqual } = require("../checkIfTwoStringArraysAreEquivalent.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("arrayStringsAreEqual", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
            Output: true
            */
            const expected = true;
            const actual = arrayStringsAreEqual(["ab", "c"],["a", "bc"]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
            Output: false
            */
            const expected = false;
            const actual = arrayStringsAreEqual(["a", "cb"],["ab", "c"]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
            Output: true
            */
            const expected = true;
            const actual = arrayStringsAreEqual(["abc", "d", "defg"],["abcddefg"]);
            expect(actual).to.deep.equal(expected);
        });
    });
