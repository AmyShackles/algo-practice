const { reverseOnlyLetters } = require("../reverseOnlyLetters.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("reverseOnlyLetters", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: "ab-cd"
            Output: "dc-ba"
            */
            const expected = "dc-ba";
            const actual = reverseOnlyLetters("ab-cd");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: "a-bC-dEf-ghIj"
            Output: "j-Ih-gfE-dCba"
            */
            const expected = "j-Ih-gfE-dCba";
            const actual = reverseOnlyLetters("a-bC-dEf-ghIj");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: "Test1ng-Leet=code-Q!"
            Output: "Qedo1ct-eeLg=ntse-T!"
            */
            const expected = "Qedo1ct-eeLg=ntse-T!";
            const actual = reverseOnlyLetters("Test1ng-Leet=code-Q!");
            expect(actual).to.deep.equal(expected);
        });
    });
