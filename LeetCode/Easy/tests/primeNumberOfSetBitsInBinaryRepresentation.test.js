const { countPrimeSetBits } = require("../primeNumberOfSetBitsInBinaryRepresentation.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("countPrimeSetBits", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: L = 6, R = 10
            Output: 4
            */
            const expected = 4;
            const actual = countPrimeSetBits(6,10);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: L = 10, R = 15
            Output: 5
            */
            const expected = 5;
            const actual = countPrimeSetBits(10,15);
            expect(actual).to.deep.equal(expected);
        });
    });
