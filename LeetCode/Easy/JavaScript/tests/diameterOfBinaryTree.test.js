const { diameterOfBinaryTree } = require("../diameterOfBinaryTree.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("diameterOfBinaryTree", () => {
    it("should return the right value for Example 1", () => {
        /*
            Sanity check:
            Input: [1,2,3,4,5]
            Output: 3
        */
       const expected = 3;
       const actual = diameterOfBinaryTree([1,2,3,4,5]);
       expect(actual).to.deep.equal(expected);
    })
});
