const { minDepth } = require("../minimumDepthOfBinaryTree.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("minDepth", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: root = [3,9,20,null,null,15,7]
            Output: 2
            */
            const expected = 2;
            const actual = minDepth([3,9,20,null,null,15,7]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: root = [2,null,3,null,4,null,5,null,6]
            Output: 5
            */
            const expected = 5;
            const actual = minDepth([2,null,3,null,4,null,5,null,6]);
            expect(actual).to.deep.equal(expected);
        });
    });
