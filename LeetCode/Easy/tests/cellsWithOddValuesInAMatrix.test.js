const { oddCells } = require("../cellsWithOddValuesInAMatrix.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("oddCells", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: n = 2, m = 3, indices = [[0,1],[1,1]]
            Output: 6
            */
            const expected = 6;
            const actual = oddCells(2,3,[[0,1],[1,1]]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: n = 2, m = 2, indices = [[1,1],[0,0]]
            Output: 0
            */
            const expected = 0;
            const actual = oddCells(2,2,[[1,1],[0,0]]);
            expect(actual).to.deep.equal(expected);
        });
    });
