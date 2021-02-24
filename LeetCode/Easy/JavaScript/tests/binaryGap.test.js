const { binaryGap } = require("../binaryGap.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("binaryGap", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: n = 22
            Output: 2
            */
            const expected = 2;
            const actual = binaryGap(22);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: n = 5
            Output: 2
            */
            const expected = 2;
            const actual = binaryGap(5);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: n = 6
            Output: 1
            */
            const expected = 1;
            const actual = binaryGap(6);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: n = 8
            Output: 0
            */
            const expected = 0;
            const actual = binaryGap(8);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 5", () => {
            /*
            For sanity checking:
            Input: n = 1
            Output: 0
            */
            const expected = 0;
            const actual = binaryGap(1);
            expect(actual).to.deep.equal(expected);
        });
    });
