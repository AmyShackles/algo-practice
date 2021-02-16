const { mySqrt } = require("../sqrtx.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("mySqrt", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: x = 4
            Output: 2
            */
            const expected = 2;
            const actual = mySqrt(4);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: x = 8
            Output: 2
            */
            const expected = 2;
            const actual = mySqrt(8);
            expect(actual).to.deep.equal(expected);
        });
    });
