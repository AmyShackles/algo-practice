const { countPrimes } = require("../countPrimes.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("countPrimes", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: n = 10
            Output: 4
            */
            const expected = 4;
            const actual = countPrimes(10);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: n = 0
            Output: 0
            */
            const expected = 0;
            const actual = countPrimes(0);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: n = 1
            Output: 0
            */
            const expected = 0;
            const actual = countPrimes(1);
            expect(actual).to.deep.equal(expected);
        });
    });
