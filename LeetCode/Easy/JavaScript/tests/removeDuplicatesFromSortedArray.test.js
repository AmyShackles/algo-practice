const { removeDuplicates } = require("../removeDuplicatesFromSortedArray.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("removeDuplicates", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: nums = [1,1,2]
            Output: 2, nums = [1,2]
            */
            const expected = 2, nums = [1,2];
            const actual = removeDuplicates([1,1,2]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: nums = [0,0,1,1,1,2,2,3,3,4]
            Output: 5, nums = [0,1,2,3,4]
            */
            const expected = 5, nums = [0,1,2,3,4];
            const actual = removeDuplicates([0,0,1,1,1,2,2,3,3,4]);
            expect(actual).to.deep.equal(expected);
        });
    });
