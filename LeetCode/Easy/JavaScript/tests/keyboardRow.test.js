const { findWords } = require("../keyboardRow.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("findWords", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: words = ["Hello","Alaska","Dad","Peace"]
            Output: ["Alaska","Dad"]
            */
            const expected = ["Alaska","Dad"];
            const actual = findWords(["Hello","Alaska","Dad","Peace"]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: words = ["omk"]
            Output: []
            */
            const expected = [];
            const actual = findWords(["omk"]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: words = ["adsdf","sfd"]
            Output: ["adsdf","sfd"]
            */
            const expected = ["adsdf","sfd"];
            const actual = findWords(["adsdf","sfd"]);
            expect(actual).to.deep.equal(expected);
        });
    });
