const { stringMatching } = require("../stringMatchingInAnArray.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("stringMatching", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: words = ["mass","as","hero","superhero"]
            Output: ["as","hero"]
            */
            const expected = ["as","hero"];
            const actual = stringMatching(["mass","as","hero","superhero"]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: words = ["leetcode","et","code"]
            Output: ["et","code"]
            */
            const expected = ["et","code"];
            const actual = stringMatching(["leetcode","et","code"]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: words = ["blue","green","bu"]
            Output: []
            */
            const expected = [];
            const actual = stringMatching(["blue","green","bu"]);
            expect(actual).to.deep.equal(expected);
        });
    });
