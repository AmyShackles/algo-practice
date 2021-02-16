const { backspaceCompare } = require("../backspaceStringCompare.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("backspaceCompare", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: S = "ab#c", T = "ad#c"
            Output: true
            */
            const expected = true;
            const actual = backspaceCompare("ab#c","ad#c");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: S = "ab##", T = "c#d#"
            Output: true
            */
            const expected = true;
            const actual = backspaceCompare("ab##","c#d#");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: S = "a##c", T = "#a#c"
            Output: true
            */
            const expected = true;
            const actual = backspaceCompare("a##c","#a#c");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: S = "a#c", T = "b"
            Output: false
            */
            const expected = false;
            const actual = backspaceCompare("a#c","b");
            expect(actual).to.deep.equal(expected);
        });
    });
