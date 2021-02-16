const { shiftGrid } = require("../shift2dGrid.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("shiftGrid", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
            Output: [[9,1,2],[3,4,5],[6,7,8]]
            */
            const expected = [[9,1,2],[3,4,5],[6,7,8]];
            const actual = shiftGrid([[1,2,3],[4,5,6],[7,8,9]],1);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4
            Output: [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]
            */
            const expected = [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]];
            const actual = shiftGrid([[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]],4);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9
            Output: [[1,2,3],[4,5,6],[7,8,9]]
            */
            const expected = [[1,2,3],[4,5,6],[7,8,9]];
            const actual = shiftGrid([[1,2,3],[4,5,6],[7,8,9]],9);
            expect(actual).to.deep.equal(expected);
        });
    });
