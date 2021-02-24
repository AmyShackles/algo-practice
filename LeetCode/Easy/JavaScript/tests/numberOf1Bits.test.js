const { hammingWeight } = require("../numberOf1Bits.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("hammingWeight", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: n = 00000000000000000000000000001011
            Output: 3
            */
            const expected = 3;
            const actual = hammingWeight(00000000000000000000000000001011);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: n = 00000000000000000000000010000000
            Output: 1
            */
            const expected = 1;
            const actual = hammingWeight(00000000000000000000000010000000);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: n = 11111111111111111111111111111101
            Output: 31
            */
            const expected = 31;
            const actual = hammingWeight(11111111111111111111111111111101);
            expect(actual).to.deep.equal(expected);
        });
    });
