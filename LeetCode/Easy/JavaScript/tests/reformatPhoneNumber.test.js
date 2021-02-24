const { reformatNumber } = require("../reformatPhoneNumber.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("reformatNumber", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: number = "1-23-45 6"
            Output: "123-456"
            */
            const expected = "123-456";
            const actual = reformatNumber("1-23-45 6");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: number = "123 4-567"
            Output: "123-45-67"
            */
            const expected = "123-45-67";
            const actual = reformatNumber("123 4-567");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: number = "123 4-5678"
            Output: "123-456-78"
            */
            const expected = "123-456-78";
            const actual = reformatNumber("123 4-5678");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: number = "12"
            Output: "12"
            */
            const expected = "12";
            const actual = reformatNumber("12");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 5", () => {
            /*
            For sanity checking:
            Input: number = "--17-5 229 35-39475 "
            Output: "175-229-353-94-75"
            */
            const expected = "175-229-353-94-75";
            const actual = reformatNumber("--17-5 229 35-39475 ");
            expect(actual).to.deep.equal(expected);
        });
    });
