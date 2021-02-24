const { maximumProduct } = require("../maximumProductOfThreeNumbers.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("maximumProduct", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: nums = [1,2,3]
            Output: 6
            */
            const expected = 6;
            const actual = maximumProduct([1,2,3]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: nums = [1,2,3,4]
            Output: 24
            */
            const expected = 24;
            const actual = maximumProduct([1,2,3,4]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: nums = [-1,-2,-3]
            Output: -6
            */
            const expected = -6;
            const actual = maximumProduct([-1,-2,-3]);
            expect(actual).to.deep.equal(expected);
        });
    });
