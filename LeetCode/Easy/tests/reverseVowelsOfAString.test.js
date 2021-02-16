const { reverseVowels } = require("../reverseVowelsOfAString.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("reverseVowels", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: "hello"
            Output: "holle"
            */
            const expected = "holle";
            const actual = reverseVowels("hello");
            expect(actual).to.deep.equal(expected);
        });
    });
