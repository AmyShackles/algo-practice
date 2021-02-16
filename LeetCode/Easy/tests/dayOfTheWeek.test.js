const { dayOfTheWeek } = require("../dayOfTheWeek.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("dayOfTheWeek", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: day = 31, month = 8, year = 2019
            Output: "Saturday"
            */
            const expected = "Saturday";
            const actual = dayOfTheWeek(31,8,2019);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: day = 18, month = 7, year = 1999
            Output: "Sunday"
            */
            const expected = "Sunday";
            const actual = dayOfTheWeek(18,7,1999);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: day = 15, month = 8, year = 1993
            Output: "Sunday"
            */
            const expected = "Sunday";
            const actual = dayOfTheWeek(15,8,1993);
            expect(actual).to.deep.equal(expected);
        });
    });
