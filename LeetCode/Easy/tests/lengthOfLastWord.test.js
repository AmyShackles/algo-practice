const { lengthOfLastWord } = require("../lengthOfLastWord.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("lengthOfLastWord", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: s = "Hello World"
            Output: 5
            */
            const expected = 5;
            const actual = lengthOfLastWord("Hello World");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: s = " "
            Output: 0
            */
            const expected = 0;
            const actual = lengthOfLastWord(" ");
            expect(actual).to.deep.equal(expected);
        });
    });
