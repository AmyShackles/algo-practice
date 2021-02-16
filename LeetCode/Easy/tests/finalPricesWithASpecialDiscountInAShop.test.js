const { finalPrices } = require("../finalPricesWithASpecialDiscountInAShop.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("finalPrices", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: prices = [8,4,6,2,3]
            Output: [4,2,4,2,3]
            */
            const expected = [4,2,4,2,3];
            const actual = finalPrices([8,4,6,2,3]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: prices = [1,2,3,4,5]
            Output: [1,2,3,4,5]
            */
            const expected = [1,2,3,4,5];
            const actual = finalPrices([1,2,3,4,5]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: prices = [10,1,1,6]
            Output: [9,0,1,6]
            */
            const expected = [9,0,1,6];
            const actual = finalPrices([10,1,1,6]);
            expect(actual).to.deep.equal(expected);
        });
    });
