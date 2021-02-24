const { isPerfectSquare } = require("../validPerfectSquare.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("isPerfectSquare", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: num = 16
            Output: true
            */
            const expected = true;
            const actual = isPerfectSquare(16);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: num = 14
            Output: false
            */
            const expected = false;
            const actual = isPerfectSquare(14);
            expect(actual).to.deep.equal(expected);
        });
    });
