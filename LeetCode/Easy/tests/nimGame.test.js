const { canWinNim } = require("../nimGame.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("canWinNim", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: n = 4
            Output: false
            */
            const expected = false;
            const actual = canWinNim(4);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: n = 1
            Output: true
            */
            const expected = true;
            const actual = canWinNim(1);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: n = 2
            Output: true
            */
            const expected = true;
            const actual = canWinNim(2);
            expect(actual).to.deep.equal(expected);
        });
    });
