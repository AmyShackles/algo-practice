const { arrayStringsAreEqual } = require("../arrayStringsAreEqual.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};
describe.todo("arrayStringsAreEqual", () => {
    it("should return the right value for Example 1", () => {
        const expected = true;
        const actual = arrayStringsAreEqual(["ab", "c"], ["a", "bc"]);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        const expected = false;
        const actual = arrayStringsAreEqual(["a", "cb"], ["ab", "c"]);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 3", () => {
        const expected = true;
        const actual = arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]);
        expect(actual).to.deep.equal(expected);
    });
});
