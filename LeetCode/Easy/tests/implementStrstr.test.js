const { strStr } = require("../implementStrstr.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("strStr", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: haystack = "hello", needle = "ll"
            Output: 2
            */
            const expected = 2;
            const actual = strStr("hello","ll");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: haystack = "aaaaa", needle = "bba"
            Output: -1
            */
            const expected = -1;
            const actual = strStr("aaaaa","bba");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: haystack = "", needle = ""
            Output: 0
            */
            const expected = 0;
            const actual = strStr("","");
            expect(actual).to.deep.equal(expected);
        });
    });
