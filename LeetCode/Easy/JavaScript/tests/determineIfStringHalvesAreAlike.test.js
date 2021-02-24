const { halvesAreAlike } = require("../determineIfStringHalvesAreAlike.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("halvesAreAlike", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: s = "book"
            Output: true
            */
            const expected = true;
            const actual = halvesAreAlike("book");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: s = "textbook"
            Output: false
            */
            const expected = false;
            const actual = halvesAreAlike("textbook");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: s = "MerryChristmas"
            Output: false
            */
            const expected = false;
            const actual = halvesAreAlike("MerryChristmas");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: s = "AbCdEfGh"
            Output: true
            */
            const expected = true;
            const actual = halvesAreAlike("AbCdEfGh");
            expect(actual).to.deep.equal(expected);
        });
    });
