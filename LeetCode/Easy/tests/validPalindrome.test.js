const { isPalindrome } = require("../validPalindrome.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("isPalindrome", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: "A man, a plan, a canal: Panama"
            Output: true
            */
            const expected = true;
            const actual = isPalindrome("A man, a plan, a canal: Panama");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: "race a car"
            Output: false
            */
            const expected = false;
            const actual = isPalindrome("race a car");
            expect(actual).to.deep.equal(expected);
        });
    });
