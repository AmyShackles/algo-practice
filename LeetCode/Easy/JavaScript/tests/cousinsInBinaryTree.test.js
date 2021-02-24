const { isCousins } = require("../cousinsInBinaryTree.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("isCousins", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: root = [1,2,3,4], x = 4, y = 3
            Output: false
            */
            const expected = false;
            const actual = isCousins([1,2,3,4],4,3);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
            Output: true
            */
            const expected = true;
            const actual = isCousins([1,2,3,null,4,null,5],5,4);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: root = [1,2,3,null,4], x = 2, y = 3
            Output: false
            */
            const expected = false;
            const actual = isCousins([1,2,3,null,4],2,3);
            expect(actual).to.deep.equal(expected);
        });
    });
