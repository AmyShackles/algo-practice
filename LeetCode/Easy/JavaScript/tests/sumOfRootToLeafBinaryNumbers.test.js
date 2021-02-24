const { sumRootToLeaf } = require("../sumOfRootToLeafBinaryNumbers.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("sumRootToLeaf", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: root = [1,0,1,0,1,0,1]
            Output: 22
            */
            const expected = 22;
            const actual = sumRootToLeaf([1,0,1,0,1,0,1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: root = [0]
            Output: 0
            */
            const expected = 0;
            const actual = sumRootToLeaf([0]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: root = [1]
            Output: 1
            */
            const expected = 1;
            const actual = sumRootToLeaf([1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: root = [1,1]
            Output: 3
            */
            const expected = 3;
            const actual = sumRootToLeaf([1,1]);
            expect(actual).to.deep.equal(expected);
        });
    });
