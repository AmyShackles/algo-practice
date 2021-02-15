const { flipAndInvertImage } = require("../flipAndInvertImage.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};
describe.todo("flipAndInvertImage", () => {
    it("should return the right value for Example 1", () => {
        const expected = [
            [1, 0, 0],
            [0, 1, 0],
            [1, 1, 1],
        ];
        const actual = flipAndInvertImage([
            [1, 1, 0],
            [1, 0, 1],
            [0, 0, 0],
        ]);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        const expected = [
            [1, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 1],
            [1, 0, 1, 0],
        ];
        const actual = flipAndInvertImage([
            [1, 1, 0, 0],
            [1, 0, 0, 1],
            [0, 1, 1, 1],
            [1, 0, 1, 0],
        ]);
        expect(actual).to.deep.equal(expected);
    });
});
