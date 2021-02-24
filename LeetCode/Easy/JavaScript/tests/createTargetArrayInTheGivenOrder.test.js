const { createTargetArray } = require("../createTargetArrayInTheGivenOrder.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("createTargetArray", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
            Output: [0,4,1,3,2]
            */
            const expected = [0,4,1,3,2];
            const actual = createTargetArray([0,1,2,3,4],[0,1,2,2,1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]
            Output: [0,1,2,3,4]
            */
            const expected = [0,1,2,3,4];
            const actual = createTargetArray([1,2,3,4,0],[0,1,2,3,0]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: nums = [1], index = [0]
            Output: [1]
            */
            const expected = [1];
            const actual = createTargetArray([1],[0]);
            expect(actual).to.deep.equal(expected);
        });
    });
