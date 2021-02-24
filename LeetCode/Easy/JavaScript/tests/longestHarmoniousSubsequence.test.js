const { findLHS } = require("../longestHarmoniousSubsequence.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("findLHS", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: nums = [1,3,2,2,5,2,3,7]
            Output: 5
            */
            const expected = 5;
            const actual = findLHS([1,3,2,2,5,2,3,7]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: nums = [1,2,3,4]
            Output: 2
            */
            const expected = 2;
            const actual = findLHS([1,2,3,4]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: nums = [1,1,1,1]
            Output: 0
            */
            const expected = 0;
            const actual = findLHS([1,1,1,1]);
            expect(actual).to.deep.equal(expected);
        });
    });
