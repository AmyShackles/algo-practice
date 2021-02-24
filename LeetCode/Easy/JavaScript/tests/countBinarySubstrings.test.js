const { countBinarySubstrings } = require("../countBinarySubstrings.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("countBinarySubstrings", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: "00110011"
            Output: 6
            */
            const expected = 6;
            const actual = countBinarySubstrings("00110011");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: "10101"
            Output: 4
            */
            const expected = 4;
            const actual = countBinarySubstrings("10101");
            expect(actual).to.deep.equal(expected);
        });
    });
