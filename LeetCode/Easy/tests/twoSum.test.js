const { twoSum } = require("../twoSum.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("twoSum", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: nums = [2,7,11,15], target = 9
            Output: [0,1]
            */
            const expected = [0,1];
            const actual = twoSum([2,7,11,15],9);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: nums = [3,2,4], target = 6
            Output: [1,2]
            */
            const expected = [1,2];
            const actual = twoSum([3,2,4],6);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: nums = [3,3], target = 6
            Output: [0,1]
            */
            const expected = [0,1];
            const actual = twoSum([3,3],6);
            expect(actual).to.deep.equal(expected);
        });
    });
