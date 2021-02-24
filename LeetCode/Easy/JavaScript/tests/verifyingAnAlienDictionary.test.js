const { isAlienSorted } = require("../verifyingAnAlienDictionary.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("isAlienSorted", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
            Output: true
            */
            const expected = true;
            const actual = isAlienSorted(["hello","leetcode"],"hlabcdefgijkmnopqrstuvwxyz");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
            Output: false
            */
            const expected = false;
            const actual = isAlienSorted(["word","world","row"],"worldabcefghijkmnpqstuvxyz");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
            Output: false
            */
            const expected = false;
            const actual = isAlienSorted(["apple","app"],"abcdefghijklmnopqrstuvwxyz");
            expect(actual).to.deep.equal(expected);
        });
    });
