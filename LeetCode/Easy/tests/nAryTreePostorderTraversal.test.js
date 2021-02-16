const { postorder } = require("../nAryTreePostorderTraversal.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("postorder", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: root = [1,null,3,2,4,null,5,6]
            Output: [5,6,3,2,4,1]
            */
            const expected = [5,6,3,2,4,1];
            const actual = postorder([1,null,3,2,4,null,5,6]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
            Output: [2,6,14,11,7,3,12,8,4,13,9,10,5,1]
            */
            const expected = [2,6,14,11,7,3,12,8,4,13,9,10,5,1];
            const actual = postorder([1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]);
            expect(actual).to.deep.equal(expected);
        });
    });
