const { maxDepth } = require("../maximumDepthOfNAryTree.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("maxDepth", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: root = [1,null,3,2,4,null,5,6]
            Output: 3
            */
            const expected = 3;
            const actual = maxDepth([1,null,3,2,4,null,5,6]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
            Output: 5
            */
            const expected = 5;
            const actual = maxDepth([1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]);
            expect(actual).to.deep.equal(expected);
        });
    });
