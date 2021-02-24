const { isSameTree } = require("../sameTree.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("isSameTree", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: p = [1,2,3], q = [1,2,3]
            Output: true
            */
            const expected = true;
            const actual = isSameTree([1,2,3],[1,2,3]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: p = [1,2], q = [1,null,2]
            Output: false
            */
            const expected = false;
            const actual = isSameTree([1,2],[1,null,2]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: p = [1,2,1], q = [1,1,2]
            Output: false
            */
            const expected = false;
            const actual = isSameTree([1,2,1],[1,1,2]);
            expect(actual).to.deep.equal(expected);
        });
    });
