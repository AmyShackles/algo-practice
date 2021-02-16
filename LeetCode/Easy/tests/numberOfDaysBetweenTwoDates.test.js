const { daysBetweenDates } = require("../numberOfDaysBetweenTwoDates.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("daysBetweenDates", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: date1 = "2019-06-29", date2 = "2019-06-30"
            Output: 1
            */
            const expected = 1;
            const actual = daysBetweenDates("2019-06-29","2019-06-30");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: date1 = "2020-01-15", date2 = "2019-12-31"
            Output: 15
            */
            const expected = 15;
            const actual = daysBetweenDates("2020-01-15","2019-12-31");
            expect(actual).to.deep.equal(expected);
        });
    });
