const { isToeplitzMatrix } = require("../toeplitzMatrix.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("isToeplitzMatrix", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
            Output: true
            */
            const expected = true;
            const actual = isToeplitzMatrix([[1,2,3,4],[5,1,2,3],[9,5,1,2]]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: matrix = [[1,2],[2,2]]
            Output: false
            */
            const expected = false;
            const actual = isToeplitzMatrix([[1,2],[2,2]]);
            expect(actual).to.deep.equal(expected);
        });
    });
