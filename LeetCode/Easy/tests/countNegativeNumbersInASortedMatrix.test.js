const { countNegatives } = require("../countNegativeNumbersInASortedMatrix.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("countNegatives", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
            Output: 8
            */
            const expected = 8;
            const actual = countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: grid = [[3,2],[1,0]]
            Output: 0
            */
            const expected = 0;
            const actual = countNegatives([[3,2],[1,0]]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: grid = [[1,-1],[-1,-1]]
            Output: 3
            */
            const expected = 3;
            const actual = countNegatives([[1,-1],[-1,-1]]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: grid = [[-1]]
            Output: 1
            */
            const expected = 1;
            const actual = countNegatives([[-1]]);
            expect(actual).to.deep.equal(expected);
        });
    });
