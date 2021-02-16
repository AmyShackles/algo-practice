const { reformatDate } = require("../reformatDate.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("reformatDate", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: date = "20th Oct 2052"
            Output: "2052-10-20"
            */
            const expected = "2052-10-20";
            const actual = reformatDate("20th Oct 2052");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: date = "6th Jun 1933"
            Output: "1933-06-06"
            */
            const expected = "1933-06-06";
            const actual = reformatDate("6th Jun 1933");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: date = "26th May 1960"
            Output: "1960-05-26"
            */
            const expected = "1960-05-26";
            const actual = reformatDate("26th May 1960");
            expect(actual).to.deep.equal(expected);
        });
    });
