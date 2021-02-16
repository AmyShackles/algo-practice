const { canConstruct } = require("../ransomNote.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("canConstruct", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: ransomNote = "a", magazine = "b"
            Output: false
            */
            const expected = false;
            const actual = canConstruct("a","b");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: ransomNote = "aa", magazine = "ab"
            Output: false
            */
            const expected = false;
            const actual = canConstruct("aa","ab");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: ransomNote = "aa", magazine = "aab"
            Output: true
            */
            const expected = true;
            const actual = canConstruct("aa","aab");
            expect(actual).to.deep.equal(expected);
        });
    });
