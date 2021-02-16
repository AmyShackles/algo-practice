const { judgeCircle } = require("../robotReturnToOrigin.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("judgeCircle", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: moves = "UD"
            Output: true
            */
            const expected = true;
            const actual = judgeCircle("UD");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: moves = "LL"
            Output: false
            */
            const expected = false;
            const actual = judgeCircle("LL");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: moves = "RRDD"
            Output: false
            */
            const expected = false;
            const actual = judgeCircle("RRDD");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: moves = "LDRRLRUULR"
            Output: false
            */
            const expected = false;
            const actual = judgeCircle("LDRRLRUULR");
            expect(actual).to.deep.equal(expected);
        });
    });
