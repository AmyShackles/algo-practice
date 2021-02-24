const { runningSum } = require("../runningSumOf1dArray.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("runningSum", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: nums = [1,2,3,4]
            Output: [1,3,6,10]
            */
            const expected = [1,3,6,10];
            const actual = runningSum([1,2,3,4]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: nums = [1,1,1,1,1]
            Output: [1,2,3,4,5]
            */
            const expected = [1,2,3,4,5];
            const actual = runningSum([1,1,1,1,1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: nums = [3,1,2,10,1]
            Output: [3,4,6,16,17]
            */
            const expected = [3,4,6,16,17];
            const actual = runningSum([3,1,2,10,1]);
            expect(actual).to.deep.equal(expected);
        });
    });
