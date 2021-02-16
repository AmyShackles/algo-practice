const { isValid } = require("../validParentheses.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("isValid", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: s = "()"
            Output: true
            */
            const expected = true;
            const actual = isValid("()");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: s = "()[]{}"
            Output: true
            */
            const expected = true;
            const actual = isValid("()[]{}");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: s = "(]"
            Output: false
            */
            const expected = false;
            const actual = isValid("(]");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: s = "([)]"
            Output: false
            */
            const expected = false;
            const actual = isValid("([)]");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 5", () => {
            /*
            For sanity checking:
            Input: s = "{[]}"
            Output: true
            */
            const expected = true;
            const actual = isValid("{[]}");
            expect(actual).to.deep.equal(expected);
        });
    });
