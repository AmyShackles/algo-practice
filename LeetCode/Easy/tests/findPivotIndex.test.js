const { pivotIndex } = require("../findPivotIndex.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("pivotIndex", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: nums = [1,7,3,6,5,6]
            Output: 3
            */
            const expected = 3;
            const actual = pivotIndex([1,7,3,6,5,6]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: nums = [1,2,3]
            Output: -1
            */
            const expected = -1;
            const actual = pivotIndex([1,2,3]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: nums = [2,1,-1]
            Output: 0
            */
            const expected = 0;
            const actual = pivotIndex([2,1,-1]);
            expect(actual).to.deep.equal(expected);
        });
    });
