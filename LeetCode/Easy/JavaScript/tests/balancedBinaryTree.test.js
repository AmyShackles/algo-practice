const { isBalanced } = require("../balancedBinaryTree.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("isBalanced", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: root = [3,9,20,null,null,15,7]
            Output: true
            */
            const expected = true;
            const actual = isBalanced([3,9,20,null,null,15,7]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: root = [1,2,2,3,3,null,null,4,4]
            Output: false
            */
            const expected = false;
            const actual = isBalanced([1,2,2,3,3,null,null,4,4]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: root = []
            Output: true
            */
            const expected = true;
            const actual = isBalanced([]);
            expect(actual).to.deep.equal(expected);
        });
    });
