const { allCellsDistOrder } = require("../matrixCellsInDistanceOrder.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("allCellsDistOrder", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: R = 1, C = 2, r0 = 0, c0 = 0
            Output: [[0,0],[0,1]]
            */
            const expected = [[0,0],[0,1]];
            const actual = allCellsDistOrder(1,2,0,0);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: R = 2, C = 2, r0 = 0, c0 = 1
            Output: [[0,1],[0,0],[1,1],[1,0]]
            */
            const expected = [[0,1],[0,0],[1,1],[1,0]];
            const actual = allCellsDistOrder(2,2,0,1);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: R = 2, C = 3, r0 = 1, c0 = 2
            Output: [[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]
            */
            const expected = [[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]];
            const actual = allCellsDistOrder(2,3,1,2);
            expect(actual).to.deep.equal(expected);
        });
    });
