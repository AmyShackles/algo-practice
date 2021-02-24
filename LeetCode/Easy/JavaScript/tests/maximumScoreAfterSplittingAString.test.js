const { maxScore } = require("../maximumScoreAfterSplittingAString.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("maxScore", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: s = "011101"
            Output: 5 
            */
            const expected = 5 ;
            const actual = maxScore("011101");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: s = "00111"
            Output: 5
            */
            const expected = 5;
            const actual = maxScore("00111");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: s = "1111"
            Output: 3
            */
            const expected = 3;
            const actual = maxScore("1111");
            expect(actual).to.deep.equal(expected);
        });
    });
