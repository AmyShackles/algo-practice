const { generateTheString } = require("../generateAStringWithCharactersThatHaveOddCounts.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("generateTheString", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: n = 4
            Output: "pppz"
            */
            const expected = "pppz";
            const actual = generateTheString(4);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: n = 2
            Output: "xy"
            */
            const expected = "xy";
            const actual = generateTheString(2);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: n = 7
            Output: "holasss"
            */
            const expected = "holasss";
            const actual = generateTheString(7);
            expect(actual).to.deep.equal(expected);
        });
    });
