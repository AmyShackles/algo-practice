const { majorityElement } = require("../majorityElement.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("majorityElement", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: nums = [3,2,3]
            Output: 3
            */
            const expected = 3;
            const actual = majorityElement([3,2,3]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: nums = [2,2,1,1,1,2,2]
            Output: 2
            */
            const expected = 2;
            const actual = majorityElement([2,2,1,1,1,2,2]);
            expect(actual).to.deep.equal(expected);
        });
    });
