const { nextGreaterElement } = require("../nextGreaterElementI.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("nextGreaterElement", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
            Output: [-1,3,-1]
            */
            const expected = [-1,3,-1];
            const actual = nextGreaterElement([4,1,2],[1,3,4,2]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: nums1 = [2,4], nums2 = [1,2,3,4]
            Output: [3,-1]
            */
            const expected = [3,-1];
            const actual = nextGreaterElement([2,4],[1,2,3,4]);
            expect(actual).to.deep.equal(expected);
        });
    });
