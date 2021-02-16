const { minCostClimbingStairs } = require("../minCostClimbingStairs.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("minCostClimbingStairs", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: cost = [10, 15, 20]
            Output: 15
            */
            const expected = 15;
            const actual = minCostClimbingStairs([10, 15, 20]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
            Output: 6
            */
            const expected = 6;
            const actual = minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]);
            expect(actual).to.deep.equal(expected);
        });
    });
