const { numJewelsInStones } = require("../jewelsAndStones.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("numJewelsInStones", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: jewels = "aA", stones = "aAAbbbb"
            Output: 3
            */
            const expected = 3;
            const actual = numJewelsInStones("aA","aAAbbbb");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: jewels = "z", stones = "ZZ"
            Output: 0
            */
            const expected = 0;
            const actual = numJewelsInStones("z","ZZ");
            expect(actual).to.deep.equal(expected);
        });
    });
