const { numPrimeArrangements } = require("../primeArrangements.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("numPrimeArrangements", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: n = 5
            Output: 12
            */
            const expected = 12;
            const actual = numPrimeArrangements(5);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: n = 100
            Output: 682289015
            */
            const expected = 682289015;
            const actual = numPrimeArrangements(100);
            expect(actual).to.deep.equal(expected);
        });
    });
