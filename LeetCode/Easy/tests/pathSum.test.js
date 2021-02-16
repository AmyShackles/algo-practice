const { hasPathSum } = require("../pathSum.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("hasPathSum", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
            Output: true
            */
            const expected = true;
            const actual = hasPathSum([5,4,8,11,null,13,4,7,2,null,null,null,1],22);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: root = [1,2,3], targetSum = 5
            Output: false
            */
            const expected = false;
            const actual = hasPathSum([1,2,3],5);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: root = [1,2], targetSum = 0
            Output: false
            */
            const expected = false;
            const actual = hasPathSum([1,2],0);
            expect(actual).to.deep.equal(expected);
        });
    });
