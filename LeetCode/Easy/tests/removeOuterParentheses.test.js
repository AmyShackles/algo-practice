const { removeOuterParentheses } = require("../removeOuterParentheses.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};
describe.todo("removeOuterParentheses", () => {
    it("should return the right value for Example 1", () => {
        const expected = "()()()";
        const actual = removeOuterParentheses("(()())(())");
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        const expected = "()()()()(())";
        const actual = removeOuterParentheses("(()())(())(()(()))");
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 3", () => {
        const expected = "";
        const actual = removeOuterParentheses("()()");
        expect(actual).to.deep.equal(expected);
    });
});
