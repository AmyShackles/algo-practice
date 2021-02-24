const { numWaterBottles } = require("../waterBottles.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("numWaterBottles", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: numBottles = 9, numExchange = 3
            Output: 13
            */
            const expected = 13;
            const actual = numWaterBottles(9,3);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: numBottles = 15, numExchange = 4
            Output: 19
            */
            const expected = 19;
            const actual = numWaterBottles(15,4);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: numBottles = 5, numExchange = 5
            Output: 6
            */
            const expected = 6;
            const actual = numWaterBottles(5,5);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: numBottles = 2, numExchange = 3
            Output: 2
            */
            const expected = 2;
            const actual = numWaterBottles(2,3);
            expect(actual).to.deep.equal(expected);
        });
    });
