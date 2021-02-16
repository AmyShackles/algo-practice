const { maximum69Number } = require("../maximum69Number.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("maximum69Number", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: num = 9669
            Output: 9969
            */
            const expected = 9969;
            const actual = maximum69Number(9669);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: num = 9996
            Output: 9999
            */
            const expected = 9999;
            const actual = maximum69Number(9996);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: num = 9999
            Output: 9999
            */
            const expected = 9999;
            const actual = maximum69Number(9999);
            expect(actual).to.deep.equal(expected);
        });
    });
