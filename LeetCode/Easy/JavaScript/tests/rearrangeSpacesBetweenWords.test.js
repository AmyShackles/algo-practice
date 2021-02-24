const { reorderSpaces } = require("../rearrangeSpacesBetweenWords.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("reorderSpaces", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: text = "  this   is  a sentence "
            Output: "this   is   a   sentence"
            */
            const expected = "this   is   a   sentence";
            const actual = reorderSpaces("  this   is  a sentence ");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: text = " practice   makes   perfect"
            Output: "practice   makes   perfect "
            */
            const expected = "practice   makes   perfect ";
            const actual = reorderSpaces(" practice   makes   perfect");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: text = "hello   world"
            Output: "hello   world"
            */
            const expected = "hello   world";
            const actual = reorderSpaces("hello   world");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: text = "  walks  udp package   into  bar a"
            Output: "walks  udp  package  into  bar  a "
            */
            const expected = "walks  udp  package  into  bar  a ";
            const actual = reorderSpaces("  walks  udp package   into  bar a");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 5", () => {
            /*
            For sanity checking:
            Input: text = "a"
            Output: "a"
            */
            const expected = "a";
            const actual = reorderSpaces("a");
            expect(actual).to.deep.equal(expected);
        });
    });
