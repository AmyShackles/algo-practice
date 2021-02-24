const { maxDepth } = require("../maximumDepthOfBinaryTree.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("maxDepth", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: root = [3,9,20,null,null,15,7]
            Output: 3
            */
            const expected = 3;
            const actual = maxDepth([3,9,20,null,null,15,7]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: root = [1,null,2]
            Output: 2
            */
            const expected = 2;
            const actual = maxDepth([1,null,2]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: root = []
            Output: 0
            */
            const expected = 0;
            const actual = maxDepth([]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: root = [0]
            Output: 1
            */
            const expected = 1;
            const actual = maxDepth([0]);
            expect(actual).to.deep.equal(expected);
        });
    });
