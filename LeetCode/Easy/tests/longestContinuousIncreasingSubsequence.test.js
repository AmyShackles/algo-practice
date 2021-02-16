const { findLengthOfLCIS } = require("../longestContinuousIncreasingSubsequence.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("findLengthOfLCIS", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: nums = [1,3,5,4,7]
            Output: 3
            */
            const expected = 3;
            const actual = findLengthOfLCIS([1,3,5,4,7]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: nums = [2,2,2,2,2]
            Output: 1
            */
            const expected = 1;
            const actual = findLengthOfLCIS([2,2,2,2,2]);
            expect(actual).to.deep.equal(expected);
        });
    });
