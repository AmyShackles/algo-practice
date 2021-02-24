const { findMode } = require("../findModeInBinarySearchTree.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("findMode", () => {
    it("should return the right value for Example 1", () => {
        const expected = [2];
        const actual = findMode([1,null,2,2]);
        expect(actual).to.deep.equal(expected);
    })
});
