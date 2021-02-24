const { maxRepeating } = require("../maximumRepeatingSubstring.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("maxRepeating", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: sequence = "ababc", word = "ab"
            Output: 2
            */
            const expected = 2;
            const actual = maxRepeating("ababc","ab");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: sequence = "ababc", word = "ba"
            Output: 1
            */
            const expected = 1;
            const actual = maxRepeating("ababc","ba");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: sequence = "ababc", word = "ac"
            Output: 0
            */
            const expected = 0;
            const actual = maxRepeating("ababc","ac");
            expect(actual).to.deep.equal(expected);
        });
    });
