const { lowestCommonAncestor } = require("../lowestCommonAncestorOfABinarySearchTree.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("lowestCommonAncestor", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
            Output: 6
            */
            const expected = 6;
            const actual = lowestCommonAncestor([6,2,8,0,4,7,9,null,null,3,5],2,8);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
            Output: 2
            */
            const expected = 2;
            const actual = lowestCommonAncestor([6,2,8,0,4,7,9,null,null,3,5],2,4);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: root = [2,1], p = 2, q = 1
            Output: 2
            */
            const expected = 2;
            const actual = lowestCommonAncestor([2,1],2,1);
            expect(actual).to.deep.equal(expected);
        });
    });
