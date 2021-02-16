const { uncommonFromSentences } = require("../uncommonWordsFromTwoSentences.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("uncommonFromSentences", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: A = "this apple is sweet", B = "this apple is sour"
            Output: ["sweet","sour"]
            */
            const expected = ["sweet","sour"];
            const actual = uncommonFromSentences("this apple is sweet","this apple is sour");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: A = "apple apple", B = "banana"
            Output: ["banana"]
            */
            const expected = ["banana"];
            const actual = uncommonFromSentences("apple apple","banana");
            expect(actual).to.deep.equal(expected);
        });
    });
