const { searchInsert } = require("../searchInsertPosition.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("searchInsert", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: nums = [1,3,5,6], target = 5
            Output: 2
            */
            const expected = 2;
            const actual = searchInsert([1,3,5,6],5);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: nums = [1,3,5,6], target = 2
            Output: 1
            */
            const expected = 1;
            const actual = searchInsert([1,3,5,6],2);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: nums = [1,3,5,6], target = 7
            Output: 4
            */
            const expected = 4;
            const actual = searchInsert([1,3,5,6],7);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: nums = [1,3,5,6], target = 0
            Output: 0
            */
            const expected = 0;
            const actual = searchInsert([1,3,5,6],0);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 5", () => {
            /*
            For sanity checking:
            Input: nums = [1], target = 0
            Output: 0
            */
            const expected = 0;
            const actual = searchInsert([1],0);
            expect(actual).to.deep.equal(expected);
        });
    });
