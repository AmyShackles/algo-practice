const { transpose } = require("../transposeMatrix.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("transpose", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
            Output: [[1,4,7],[2,5,8],[3,6,9]]
            */
            const expected = [[1,4,7],[2,5,8],[3,6,9]];
            const actual = transpose([[1,2,3],[4,5,6],[7,8,9]]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: matrix = [[1,2,3],[4,5,6]]
            Output: [[1,4],[2,5],[3,6]]
            */
            const expected = [[1,4],[2,5],[3,6]];
            const actual = transpose([[1,2,3],[4,5,6]]);
            expect(actual).to.deep.equal(expected);
        });
    });
