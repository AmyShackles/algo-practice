const { restoreString } = require("../restoreString.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};

describe.todo("restoreString", () => {
    it("should return the right value for Example 1", () => {
        const expected = "leetcode";
        const actual = restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]);
        expect(actual).to.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        const expected = "abc";
        const actual = restoreString("abc", [0, 1, 2]);
        expect(actual).to.equal(expected);
    });
    it("should return the right value for Example 3", () => {
        const expected = "nihao";
        const actual = restoreString("aiohn", [3, 1, 4, 2, 0]);
        expect(actual).to.equal(expected);
    });
    it("should return the right value for Example 4", () => {
        const expected = "arigatou";
        const actual = restoreString("aaiougrt", [4, 0, 2, 6, 7, 3, 1, 5]);
        expect(actual).to.equal(expected);
    });
    it("should return the right value for Example 5", () => {
        const expected = "rat";
        const actual = restoreString("art", [1, 0, 2]);
        expect(actual).to.equal(expected);
    });
});
