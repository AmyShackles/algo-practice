const { twoSum } = require("../twoSumIiInputArrayIsSorted.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("twoSum", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: numbers = [2,7,11,15], target = 9
            Output: [1,2]
            */
            const expected = [1,2];
            const actual = twoSum([2,7,11,15],9);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: numbers = [2,3,4], target = 6
            Output: [1,3]
            */
            const expected = [1,3];
            const actual = twoSum([2,3,4],6);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: numbers = [-1,0], target = -1
            Output: [1,2]
            */
            const expected = [1,2];
            const actual = twoSum([-1,0],-1);
            expect(actual).to.deep.equal(expected);
        });
    });
