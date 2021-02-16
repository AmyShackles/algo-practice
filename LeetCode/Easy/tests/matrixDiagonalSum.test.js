const { diagonalSum } = require("../matrixDiagonalSum.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("diagonalSum", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: mat = [[5]]
            Output: 5
            */
            const expected = 5;
            const actual = diagonalSum([[5]]);
            expect(actual).to.deep.equal(expected);
        });
    });
