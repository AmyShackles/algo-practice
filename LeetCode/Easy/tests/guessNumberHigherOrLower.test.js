const { guessNumber } = require("../guessNumberHigherOrLower.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("guessNumber", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: n = 10, pick = 6
            Output: 6
            */
            const expected = 6;
            const actual = guessNumber(10,6);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: n = 1, pick = 1
            Output: 1
            */
            const expected = 1;
            const actual = guessNumber(1,1);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: n = 2, pick = 1
            Output: 1
            */
            const expected = 1;
            const actual = guessNumber(2,1);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: n = 2, pick = 2
            Output: 2
            */
            const expected = 2;
            const actual = guessNumber(2,2);
            expect(actual).to.deep.equal(expected);
        });
    });
