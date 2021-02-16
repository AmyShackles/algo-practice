const { countLargestGroup } = require("../countLargestGroup.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("countLargestGroup", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: n = 13
            Output: 4
            */
            const expected = 4;
            const actual = countLargestGroup(13);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: n = 2
            Output: 2
            */
            const expected = 2;
            const actual = countLargestGroup(2);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: n = 15
            Output: 6
            */
            const expected = 6;
            const actual = countLargestGroup(15);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: n = 24
            Output: 5
            */
            const expected = 5;
            const actual = countLargestGroup(24);
            expect(actual).to.deep.equal(expected);
        });
    });
