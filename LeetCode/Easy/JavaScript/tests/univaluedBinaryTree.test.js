const { isUnivalTree } = require("../univaluedBinaryTree.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("isUnivalTree", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: [1,1,1,1,1,null,1]
            Output: true
            */
            const expected = true;
            const actual = isUnivalTree([1,1,1,1,1,null,1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: [2,2,2,5,2]
            Output: false
            */
            const expected = false;
            const actual = isUnivalTree([2,2,2,5,2]);
            expect(actual).to.deep.equal(expected);
        });
    });
