const { titleToNumber } = require("../excelSheetColumnNumber.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("titleToNumber", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: "A"
            Output: 1
            */
            const expected = 1;
            const actual = titleToNumber("A");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: "AB"
            Output: 28
            */
            const expected = 28;
            const actual = titleToNumber("AB");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: "ZY"
            Output: 701
            */
            const expected = 701;
            const actual = titleToNumber("ZY");
            expect(actual).to.deep.equal(expected);
        });
    });
