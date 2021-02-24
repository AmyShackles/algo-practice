const { isAnagram } = require("../validAnagram.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("isAnagram", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: s = "anagram", t = "nagaram"
            Output: true
            */
            const expected = true;
            const actual = isAnagram("anagram","nagaram");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: s = "rat", t = "car"
            Output: false
            */
            const expected = false;
            const actual = isAnagram("rat","car");
            expect(actual).to.deep.equal(expected);
        });
    });
