const { wordPattern } = require("../wordPattern.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("wordPattern", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: pattern = "abba", s = "dog cat cat dog"
            Output: true
            */
            const expected = true;
            const actual = wordPattern("abba","dog cat cat dog");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: pattern = "abba", s = "dog cat cat fish"
            Output: false
            */
            const expected = false;
            const actual = wordPattern("abba","dog cat cat fish");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: pattern = "aaaa", s = "dog cat cat dog"
            Output: false
            */
            const expected = false;
            const actual = wordPattern("aaaa","dog cat cat dog");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: pattern = "abba", s = "dog dog dog dog"
            Output: false
            */
            const expected = false;
            const actual = wordPattern("abba","dog dog dog dog");
            expect(actual).to.deep.equal(expected);
        });
    });
