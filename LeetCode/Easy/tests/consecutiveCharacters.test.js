const { maxPower } = require("../consecutiveCharacters.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("maxPower", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: s = "leetcode"
            Output: 2
            */
            const expected = 2;
            const actual = maxPower("leetcode");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: s = "abbcccddddeeeeedcba"
            Output: 5
            */
            const expected = 5;
            const actual = maxPower("abbcccddddeeeeedcba");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: s = "triplepillooooow"
            Output: 5
            */
            const expected = 5;
            const actual = maxPower("triplepillooooow");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: s = "hooraaaaaaaaaaay"
            Output: 11
            */
            const expected = 11;
            const actual = maxPower("hooraaaaaaaaaaay");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 5", () => {
            /*
            For sanity checking:
            Input: s = "tourist"
            Output: 1
            */
            const expected = 1;
            const actual = maxPower("tourist");
            expect(actual).to.deep.equal(expected);
        });
    });
