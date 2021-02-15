const { increasingBST } = require("../increasingBST.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};
describe.todo("increasingBST", () => {
    it("should return the right value for Example 1", () => {
        const expected = [
            1,
            null,
            2,
            null,
            3,
            null,
            4,
            null,
            5,
            null,
            6,
            null,
            7,
            null,
            8,
            null,
            9,
        ];
        const actual = increasingBST([
            5,
            3,
            6,
            2,
            4,
            null,
            8,
            1,
            null,
            null,
            null,
            7,
            9,
        ]);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        const expected = [1, null, 5, null, 7];
        const actual = increasingBST([5, 1, 7]);
        expect(actual).to.deep.equal(expected);
    });
});
