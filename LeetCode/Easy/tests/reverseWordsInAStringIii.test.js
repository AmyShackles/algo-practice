const { reverseWords } = require("../reverseWordsInAStringIii.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("reverseWords", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: "Let's take LeetCode contest"
            Output: "s'teL ekat edoCteeL tsetnoc"
            */
            const expected = "s'teL ekat edoCteeL tsetnoc";
            const actual = reverseWords("Let's take LeetCode contest");
            expect(actual).to.deep.equal(expected);
        });
    });
