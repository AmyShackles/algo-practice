const { findTilt } = require("../binaryTreeTilt.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("findTilt", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: root = [1,2,3]
            Output: 1
            */
            const expected = 1;
            const actual = findTilt([1,2,3]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: root = [4,2,9,3,5,null,7]
            Output: 15
            */
            const expected = 15;
            const actual = findTilt([4,2,9,3,5,null,7]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: root = [21,7,14,1,1,2,2,3,3]
            Output: 9
            */
            const expected = 9;
            const actual = findTilt([21,7,14,1,1,2,2,3,3]);
            expect(actual).to.deep.equal(expected);
        });
    });
