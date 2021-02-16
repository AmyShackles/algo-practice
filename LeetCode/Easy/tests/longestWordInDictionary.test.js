const { longestWord } = require("../longestWordInDictionary.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("longestWord", () => {
    it("should return the right value for Example 1", () => {
        /*
            Input: 
            words = ["w","wo","wor","worl", "world"]
            Output: "world"
        */
        const expected = "world";
        const actual = longestWord(["w","wo","wor","worl", "world"]);
        expect(actual).to.deep.equal(expected);
    })
    it("should return the right value for Example 2", () => {
        /*
            Input: 
            words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
            Output: "apple"
        */
        const expected = "apple";
        const actual = longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"]);
        expect(actual).to.deep.equal(expected);
    })
});
