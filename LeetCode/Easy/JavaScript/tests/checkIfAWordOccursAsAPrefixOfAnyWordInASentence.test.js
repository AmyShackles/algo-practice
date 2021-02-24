const { isPrefixOfWord } = require("../checkIfAWordOccursAsAPrefixOfAnyWordInASentence.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("isPrefixOfWord", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: sentence = "i love eating burger", searchWord = "burg"
            Output: 4
            */
            const expected = 4;
            const actual = isPrefixOfWord("i love eating burger","burg");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: sentence = "this problem is an easy problem", searchWord = "pro"
            Output: 2
            */
            const expected = 2;
            const actual = isPrefixOfWord("this problem is an easy problem","pro");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: sentence = "i am tired", searchWord = "you"
            Output: -1
            */
            const expected = -1;
            const actual = isPrefixOfWord("i am tired","you");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: sentence = "i use triple pillow", searchWord = "pill"
            Output: 4
            */
            const expected = 4;
            const actual = isPrefixOfWord("i use triple pillow","pill");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 5", () => {
            /*
            For sanity checking:
            Input: sentence = "hello from the other side", searchWord = "they"
            Output: -1
            */
            const expected = -1;
            const actual = isPrefixOfWord("hello from the other side","they");
            expect(actual).to.deep.equal(expected);
        });
    });
