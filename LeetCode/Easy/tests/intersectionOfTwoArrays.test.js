const { intersection } = require("../intersectionOfTwoArrays.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("intersection", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: nums1 = [1,2,2,1], nums2 = [2,2]
            Output: [2]
            */
            const expected = [2];
            const actual = intersection([1,2,2,1],[2,2]);
            expect(actual).to.deep.equal(expected);
        });
    });
