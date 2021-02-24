const { maxLengthBetweenEqualCharacters } = require("../largestSubstringBetweenTwoEqualCharacters.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("maxLengthBetweenEqualCharacters", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: s = "aa"
            Output: 0
            */
            const expected = 0;
            const actual = maxLengthBetweenEqualCharacters("aa");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: s = "abca"
            Output: 2
            */
            const expected = 2;
            const actual = maxLengthBetweenEqualCharacters("abca");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: s = "cbzxy"
            Output: -1
            */
            const expected = -1;
            const actual = maxLengthBetweenEqualCharacters("cbzxy");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: s = "cabbac"
            Output: 4
            */
            const expected = 4;
            const actual = maxLengthBetweenEqualCharacters("cabbac");
            expect(actual).to.deep.equal(expected);
        });
    });
