const { rangeSumBST } = require("../rangeSumBST.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};
describe.todo("rangeSumBST", () => {
    it("should return the right value for Example 1", () => {
        const expected = 32;
        const actual = rangeSumBST([10, 5, 15, 3, 7, null, 18], 7, 15);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        const expected = 23;
        const actual = rangeSumBST(
            [10, 5, 15, 3, 7, 13, 18, 1, null, 6],
            6,
            10
        );
        expect(actual).to.deep.equal(expected);
    });
});
