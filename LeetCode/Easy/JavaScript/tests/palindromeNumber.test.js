const { isPalindrome } = require("../palindromeNumber.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("isPalindrome", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: x = 121
            Output: true
            */
            const expected = true;
            const actual = isPalindrome(121);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: x = -121
            Output: false
            */
            const expected = false;
            const actual = isPalindrome(-121);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: x = 10
            Output: false
            */
            const expected = false;
            const actual = isPalindrome(10);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: x = -101
            Output: false
            */
            const expected = false;
            const actual = isPalindrome(-101);
            expect(actual).to.deep.equal(expected);
        });
    });
