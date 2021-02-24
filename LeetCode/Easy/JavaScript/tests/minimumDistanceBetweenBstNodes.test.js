const { minDiffInBST } = require("../minimumDistanceBetweenBstNodes.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("minDiffInBST", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: root = [4,2,6,1,3]
            Output: 1
            */
            const expected = 1;
            const actual = minDiffInBST([4,2,6,1,3]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: root = [1,0,48,null,null,12,49]
            Output: 1
            */
            const expected = 1;
            const actual = minDiffInBST([1,0,48,null,null,12,49]);
            expect(actual).to.deep.equal(expected);
        });
    });
