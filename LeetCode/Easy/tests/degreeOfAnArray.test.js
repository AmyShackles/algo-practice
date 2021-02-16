const { findShortestSubArray } = require("../degreeOfAnArray.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("findShortestSubArray", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: nums = [1,2,2,3,1]
            Output: 2
            */
            const expected = 2;
            const actual = findShortestSubArray([1,2,2,3,1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: nums = [1,2,2,3,1,4,2]
            Output: 6
            */
            const expected = 6;
            const actual = findShortestSubArray([1,2,2,3,1,4,2]);
            expect(actual).to.deep.equal(expected);
        });
    });
