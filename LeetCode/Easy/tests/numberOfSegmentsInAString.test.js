const { countSegments } = require("../numberOfSegmentsInAString.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("countSegments", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: s = "Hello, my name is John"
            Output: 5
            */
            const expected = 5;
            const actual = countSegments("Hello, my name is John");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: s = "Hello"
            Output: 1
            */
            const expected = 1;
            const actual = countSegments("Hello");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: s = "love live! mu'sic forever"
            Output: 4
            */
            const expected = 4;
            const actual = countSegments("love live! mu'sic forever");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: s = ""
            Output: 0
            */
            const expected = 0;
            const actual = countSegments("");
            expect(actual).to.deep.equal(expected);
        });
    });
