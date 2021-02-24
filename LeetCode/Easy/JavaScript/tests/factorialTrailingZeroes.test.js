const { trailingZeroes } = require("../factorialTrailingZeroes.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("trailingZeroes", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: n = 3
            Output: 0
            */
            const expected = 0;
            const actual = trailingZeroes(3);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: n = 5
            Output: 1
            */
            const expected = 1;
            const actual = trailingZeroes(5);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: n = 0
            Output: 0
            */
            const expected = 0;
            const actual = trailingZeroes(0);
            expect(actual).to.deep.equal(expected);
        });
    });
