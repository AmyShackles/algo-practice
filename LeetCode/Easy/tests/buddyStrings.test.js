const { buddyStrings } = require("../buddyStrings.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("buddyStrings", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: A = "ab", B = "ba"
            Output: true
            */
            const expected = true;
            const actual = buddyStrings("ab","ba");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: A = "ab", B = "ab"
            Output: false
            */
            const expected = false;
            const actual = buddyStrings("ab","ab");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: A = "aa", B = "aa"
            Output: true
            */
            const expected = true;
            const actual = buddyStrings("aa","aa");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: A = "aaaaaaabc", B = "aaaaaaacb"
            Output: true
            */
            const expected = true;
            const actual = buddyStrings("aaaaaaabc","aaaaaaacb");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 5", () => {
            /*
            For sanity checking:
            Input: A = "", B = "aa"
            Output: false
            */
            const expected = false;
            const actual = buddyStrings("","aa");
            expect(actual).to.deep.equal(expected);
        });
    });
