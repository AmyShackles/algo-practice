const { tribonacci } = require("../nThTribonacciNumber.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("tribonacci", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: n = 4
            Output: 4
            */
            const expected = 4;
            const actual = tribonacci(4);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: n = 25
            Output: 1389537
            */
            const expected = 1389537;
            const actual = tribonacci(25);
            expect(actual).to.deep.equal(expected);
        });
    });
