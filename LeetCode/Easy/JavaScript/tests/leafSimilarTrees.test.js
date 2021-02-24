const { leafSimilar } = require("../leafSimilarTrees.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("leafSimilar", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
            Output: true
            */
            const expected = true;
            const actual = leafSimilar([3,5,1,6,2,9,8,null,null,7,4],[3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: root1 = [1], root2 = [1]
            Output: true
            */
            const expected = true;
            const actual = leafSimilar([1],[1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: root1 = [1], root2 = [2]
            Output: false
            */
            const expected = false;
            const actual = leafSimilar([1],[2]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: root1 = [1,2], root2 = [2,2]
            Output: true
            */
            const expected = true;
            const actual = leafSimilar([1,2],[2,2]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 5", () => {
            /*
            For sanity checking:
            Input: root1 = [1,2,3], root2 = [1,3,2]
            Output: false
            */
            const expected = false;
            const actual = leafSimilar([1,2,3],[1,3,2]);
            expect(actual).to.deep.equal(expected);
        });
    });
