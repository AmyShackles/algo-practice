const { searchBST } = require("../searchInABinarySearchTree.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("searchBST", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: root = [4,2,7,1,3], val = 2
            Output: [2,1,3]
            */
            const expected = [2,1,3];
            const actual = searchBST([4,2,7,1,3],2);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: root = [4,2,7,1,3], val = 5
            Output: []
            */
            const expected = [];
            const actual = searchBST([4,2,7,1,3],5);
            expect(actual).to.deep.equal(expected);
        });
    });
