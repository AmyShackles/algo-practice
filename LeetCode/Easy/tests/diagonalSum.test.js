const { diagonalSum } = require("../diagonalSum.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};
describe.todo("diagonalSum", () => {
    it("should return the right value for Example 1", () => {
        const expected = 25;
        const actual = diagonalSum([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ]);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        const expected = 8;
        const actual = diagonalSum([
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
        ]);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 3", () => {
        const expected = 5;
        const actual = diagonalSum([[5]]);
        expect(actual).to.deep.equal(expected);
    });
});
