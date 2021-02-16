const { reverse } = require("../reverseInteger.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("reverse", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: x = 123
            Output: 321
            */
            const expected = 321;
            const actual = reverse(123);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: x = -123
            Output: -321
            */
            const expected = -321;
            const actual = reverse(-123);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: x = 120
            Output: 21
            */
            const expected = 21;
            const actual = reverse(120);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: x = 0
            Output: 0
            */
            const expected = 0;
            const actual = reverse(0);
            expect(actual).to.deep.equal(expected);
        });
    });
