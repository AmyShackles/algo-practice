const { findSecondMinimumValue } = require("../secondMinimumNodeInABinaryTree.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("findSecondMinimumValue", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: root = [2,2,5,null,null,5,7]
            Output: 5
            */
            const expected = 5;
            const actual = findSecondMinimumValue([2,2,5,null,null,5,7]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: root = [2,2,2]
            Output: -1
            */
            const expected = -1;
            const actual = findSecondMinimumValue([2,2,2]);
            expect(actual).to.deep.equal(expected);
        });
    });
