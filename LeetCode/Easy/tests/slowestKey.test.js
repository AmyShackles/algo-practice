const { slowestKey } = require("../slowestKey.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("slowestKey", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: releaseTimes = [9,29,49,50], keysPressed = "cbcd"
            Output: "c"
            */
            const expected = "c";
            const actual = slowestKey([9,29,49,50],"cbcd");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: releaseTimes = [12,23,36,46,62], keysPressed = "spuda"
            Output: "a"
            */
            const expected = "a";
            const actual = slowestKey([12,23,36,46,62],"spuda");
            expect(actual).to.deep.equal(expected);
        });
    });
