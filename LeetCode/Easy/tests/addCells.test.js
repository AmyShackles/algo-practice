const { addCells } = require("../addCells.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};
describe.todo("addCells", () => {
    it("should return the right value for Example 1", () => {
        const expected = 6;
        const actual = addCells(2, 3, [
            [0, 1],
            [1, 1],
        ]);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        const expected = 0;
        const actual = addCells(2, 2, [
            [1, 1],
            [0, 0],
        ]);
        expect(actual).to.deep.equal(expected);
    });
});
