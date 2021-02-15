const { sortString } = require("../sortString.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};
describe.todo("sortString", () => {
    it("should return the right value for Example 1", () => {
        const expected = "abccbaabccba";
        const actual = sortString("aaaabbbbcccc");
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        const expected = "art";
        const actual = sortString("rat");
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 3", () => {
        const expected = "cdelotee";
        const actual = sortString("leetcode");
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        const expected = "ggggggg";
        const actual = sortString("ggggggg");
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 3", () => {
        const expected = "ops";
        const actual = sortString("spo");
        expect(actual).to.deep.equal(expected);
    });
});
