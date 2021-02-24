const { preorder } = require("../nAryTreePreorderTraversal.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("preorder", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: root = [1,null,3,2,4,null,5,6]
            Output: [1,3,5,6,2,4]
            */
            const expected = [1,3,5,6,2,4];
            const actual = preorder([1,null,3,2,4,null,5,6]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
            Output: [1,2,3,6,7,11,14,4,8,12,5,9,13,10]
            */
            const expected = [1,2,3,6,7,11,14,4,8,12,5,9,13,10];
            const actual = preorder([1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]);
            expect(actual).to.deep.equal(expected);
        });
    });
