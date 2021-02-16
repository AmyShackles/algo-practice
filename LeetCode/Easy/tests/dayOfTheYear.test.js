const { dayOfYear } = require("../dayOfTheYear.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("dayOfYear", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: date = "2019-01-09"
            Output: 9
            */
            const expected = 9;
            const actual = dayOfYear("2019-01-09");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: date = "2019-02-10"
            Output: 41
            */
            const expected = 41;
            const actual = dayOfYear("2019-02-10");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: date = "2003-03-01"
            Output: 60
            */
            const expected = 60;
            const actual = dayOfYear("2003-03-01");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: date = "2004-03-01"
            Output: 61
            */
            const expected = 61;
            const actual = dayOfYear("2004-03-01");
            expect(actual).to.deep.equal(expected);
        });
    });
