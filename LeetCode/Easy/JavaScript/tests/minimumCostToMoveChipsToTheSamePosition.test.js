const { minCostToMoveChips } = require("../minimumCostToMoveChipsToTheSamePosition.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("minCostToMoveChips", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: position = [1,2,3]
            Output: 1
            */
            const expected = 1;
            const actual = minCostToMoveChips([1,2,3]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: position = [2,2,2,3,3]
            Output: 2
            */
            const expected = 2;
            const actual = minCostToMoveChips([2,2,2,3,3]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: position = [1,1000000000]
            Output: 1
            */
            const expected = 1;
            const actual = minCostToMoveChips([1,1000000000]);
            expect(actual).to.deep.equal(expected);
        });
    });
