const { countConsistentStrings } = require("../countConsistentStrings.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};
describe.todo("countConsistentStrings", () => {
    it("should return the right value for Example 1", () => {
        const expected = 2;
        const actual = countConsistentStrings("ab", [
            "ad",
            "bd",
            "aaab",
            "baa",
            "badab",
        ]);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        const expected = 7;
        const actual = countConsistentStrings("abc", [
            "a",
            "b",
            "c",
            "ab",
            "ac",
            "bc",
            "abc",
        ]);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 3", () => {
        const expected = 4;
        const actual = countConsistentStrings("cad", [
            "cc",
            "acd",
            "b",
            "ba",
            "bac",
            "bad",
            "ac",
            "d",
        ]);
        expect(actual).to.deep.equal(expected);
    });
});
