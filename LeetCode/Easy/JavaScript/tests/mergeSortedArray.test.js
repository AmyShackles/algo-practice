const { merge } = require("../mergeSortedArray.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("merge", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
            Output: [1,2,2,3,5,6]
            */
            const expected = [1,2,2,3,5,6];
            const actual = merge([1,2,3,0,0,0],3,[2,5,6],3);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: nums1 = [1], m = 1, nums2 = [], n = 0
            Output: [1]
            */
            const expected = [1];
            const actual = merge([1],1,[],0);
            expect(actual).to.deep.equal(expected);
        });
    });
