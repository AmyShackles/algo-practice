const { toLowerCase } = require("../toLowerCase.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("toLowerCase", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: "Hello"
            Output: "hello"
            */
            const expected = "hello";
            const actual = toLowerCase("Hello");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: "here"
            Output: "here"
            */
            const expected = "here";
            const actual = toLowerCase("here");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: "LOVELY"
            Output: "lovely"
            */
            const expected = "lovely";
            const actual = toLowerCase("LOVELY");
            expect(actual).to.deep.equal(expected);
        });
    });
