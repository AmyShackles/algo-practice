const { maxProfit } = require("../bestTimeToBuyAndSellStockIi.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("maxProfit", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: [7,1,5,3,6,4]
            Output: 7
            */
            const expected = 7;
            const actual = maxProfit([7,1,5,3,6,4]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: [1,2,3,4,5]
            Output: 4
            */
            const expected = 4;
            const actual = maxProfit([1,2,3,4,5]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: [7,6,4,3,1]
            Output: 0
            */
            const expected = 0;
            const actual = maxProfit([7,6,4,3,1]);
            expect(actual).to.deep.equal(expected);
        });
    });
