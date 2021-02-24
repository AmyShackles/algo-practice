const { removeOuterParentheses } = require("../removeOutermostParentheses.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("removeOuterParentheses", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: "(()())(())"
            Output: "()()()"
            */
            const expected = "()()()";
            const actual = removeOuterParentheses("(()())(())");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: "(()())(())(()(()))"
            Output: "()()()()(())"
            */
            const expected = "()()()()(())";
            const actual = removeOuterParentheses("(()())(())(()(()))");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: "()()"
            Output: ""
            */
            const expected = "";
            const actual = removeOuterParentheses("()()");
            expect(actual).to.deep.equal(expected);
        });
    });
