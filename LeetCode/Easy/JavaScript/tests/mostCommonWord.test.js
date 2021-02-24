const { mostCommonWord } = require("../mostCommonWord.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("mostCommonWord", () => {
    it("should return the right value for Example 1", () => {
        /*
            Input: 
            paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
            banned = ["hit"]
            Output: "ball"
        */
        const expected = "ball";
        const actual = mostCommonWord(
            "Bob hit a ball, the hit BALL flew far after it was hit.",
            ["hit"]
        );
        expect(actual).to.deep.equal(expected);
    });
});
