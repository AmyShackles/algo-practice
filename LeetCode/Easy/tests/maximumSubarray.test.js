const { maxSubArray } = require("../maximumSubarray.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("maxSubArray", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
            Output: 6
            */
            const expected = 6;
            const actual = maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: nums = [1]
            Output: 1
            */
            const expected = 1;
            const actual = maxSubArray([1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: nums = [0]
            Output: 0
            */
            const expected = 0;
            const actual = maxSubArray([0]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: nums = [-1]
            Output: -1
            */
            const expected = -1;
            const actual = maxSubArray([-1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 5", () => {
            /*
            For sanity checking:
            Input: nums = [-100000]
            Output: -100000
            */
            const expected = -100000;
            const actual = maxSubArray([-100000]);
            expect(actual).to.deep.equal(expected);
        });
    });
