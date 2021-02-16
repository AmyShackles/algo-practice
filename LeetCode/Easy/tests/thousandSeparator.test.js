const { thousandSeparator } = require("../thousandSeparator.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("thousandSeparator", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: n = 987
            Output: "987"
            */
            const expected = "987";
            const actual = thousandSeparator(987);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: n = 1234
            Output: "1.234"
            */
            const expected = "1.234";
            const actual = thousandSeparator(1234);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: n = 123456789
            Output: "123.456.789"
            */
            const expected = "123.456.789";
            const actual = thousandSeparator(123456789);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: n = 0
            Output: "0"
            */
            const expected = "0";
            const actual = thousandSeparator(0);
            expect(actual).to.deep.equal(expected);
        });
    });
