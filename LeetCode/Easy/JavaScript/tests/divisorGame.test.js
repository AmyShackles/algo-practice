const { divisorGame } = require("../divisorGame.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("divisorGame", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: 2
            Output: true
            */
            const expected = true;
            const actual = divisorGame(2);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: 3
            Output: false
            */
            const expected = false;
            const actual = divisorGame(3);
            expect(actual).to.deep.equal(expected);
        });
    });
