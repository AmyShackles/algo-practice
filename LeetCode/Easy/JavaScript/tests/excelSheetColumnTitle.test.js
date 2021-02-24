const { convertToTitle } = require("../excelSheetColumnTitle.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("convertToTitle", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: 1
            Output: "A"
            */
            const expected = "A";
            const actual = convertToTitle(1);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: 28
            Output: "AB"
            */
            const expected = "AB";
            const actual = convertToTitle(28);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: 701
            Output: "ZY"
            */
            const expected = "ZY";
            const actual = convertToTitle(701);
            expect(actual).to.deep.equal(expected);
        });
    });
