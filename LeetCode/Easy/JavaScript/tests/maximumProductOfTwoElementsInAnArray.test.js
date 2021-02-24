const { maxProduct } = require("../maximumProductOfTwoElementsInAnArray.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("maxProduct", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: nums = [3,4,5,2]
            Output: 12 
            */
            const expected = 12 ;
            const actual = maxProduct([3,4,5,2]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: nums = [1,5,4,5]
            Output: 16
            */
            const expected = 16;
            const actual = maxProduct([1,5,4,5]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: nums = [3,7]
            Output: 12
            */
            const expected = 12;
            const actual = maxProduct([3,7]);
            expect(actual).to.deep.equal(expected);
        });
    });
