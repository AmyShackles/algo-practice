const { hasGroupsSizeX } = require("../xOfAKindInADeckOfCards.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("hasGroupsSizeX", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: deck = [1,2,3,4,4,3,2,1]
            Output: true
            */
            const expected = true;
            const actual = hasGroupsSizeX([1,2,3,4,4,3,2,1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: deck = [1,1,1,2,2,2,3,3]
            Output: false´
            */
            const expected = false;
            const actual = hasGroupsSizeX([1,1,1,2,2,2,3,3]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: deck = [1]
            Output: false
            */
            const expected = false;
            const actual = hasGroupsSizeX([1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: deck = [1,1]
            Output: true
            */
            const expected = true;
            const actual = hasGroupsSizeX([1,1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 5", () => {
            /*
            For sanity checking:
            Input: deck = [1,1,2,2,2,2]
            Output: true
            */
            const expected = true;
            const actual = hasGroupsSizeX([1,1,2,2,2,2]);
            expect(actual).to.deep.equal(expected);
        });
    });
