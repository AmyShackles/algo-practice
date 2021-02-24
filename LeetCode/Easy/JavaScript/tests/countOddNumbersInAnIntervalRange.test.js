const { countOdds } = require("../countOddNumbersInAnIntervalRange.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("countOdds", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: low = 3, high = 7
            Output: 3
            */
            const expected = 3;
            const actual = countOdds(3,7);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: low = 8, high = 10
            Output: 1
            */
            const expected = 1;
            const actual = countOdds(8,10);
            expect(actual).to.deep.equal(expected);
        });
    });
