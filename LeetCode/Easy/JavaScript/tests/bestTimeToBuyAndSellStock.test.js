const { maxProfit } = require("../bestTimeToBuyAndSellStock.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("maxProfit", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: prices = [7,1,5,3,6,4]
            Output: 5
            */
            const expected = 5;
            const actual = maxProfit([7,1,5,3,6,4]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: prices = [7,6,4,3,1]
            Output: 0
            */
            const expected = 0;
            const actual = maxProfit([7,6,4,3,1]);
            expect(actual).to.deep.equal(expected);
        });
    });
