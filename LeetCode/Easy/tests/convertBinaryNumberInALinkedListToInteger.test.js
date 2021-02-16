const { getDecimalValue } = require("../convertBinaryNumberInALinkedListToInteger.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("getDecimalValue", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: head = [1,0,1]
            Output: 5
            */
            const expected = 5;
            const actual = getDecimalValue([1,0,1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: head = [0]
            Output: 0
            */
            const expected = 0;
            const actual = getDecimalValue([0]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: head = [1]
            Output: 1
            */
            const expected = 1;
            const actual = getDecimalValue([1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
            Output: 18880
            */
            const expected = 18880;
            const actual = getDecimalValue([1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 5", () => {
            /*
            For sanity checking:
            Input: head = [0,0]
            Output: 0
            */
            const expected = 0;
            const actual = getDecimalValue([0,0]);
            expect(actual).to.deep.equal(expected);
        });
    });
