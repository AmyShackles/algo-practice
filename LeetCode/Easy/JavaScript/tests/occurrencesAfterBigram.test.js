const { findOcurrences } = require("../occurrencesAfterBigram.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("findOcurrences", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: text = "alice is a good girl she is a good student", first = "a", second = "good"
            Output: ["girl","student"]
            */
            const expected = ["girl","student"];
            const actual = findOcurrences("alice is a good girl she is a good student","a","good");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: text = "we will we will rock you", first = "we", second = "will"
            Output: ["we","rock"]
            */
            const expected = ["we","rock"];
            const actual = findOcurrences("we will we will rock you","we","will");
            expect(actual).to.deep.equal(expected);
        });
    });
