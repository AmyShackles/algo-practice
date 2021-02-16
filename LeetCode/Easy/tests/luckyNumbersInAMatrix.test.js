const { luckyNumbers } = require("../luckyNumbersInAMatrix.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("luckyNumbers", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
            Output: [15]
            */
            const expected = [15];
            const actual = luckyNumbers([[3,7,8],[9,11,13],[15,16,17]]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
            Output: [12]
            */
            const expected = [12];
            const actual = luckyNumbers([[1,10,4,2],[9,3,8,7],[15,16,17,12]]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: matrix = [[7,8],[1,2]]
            Output: [7]
            */
            const expected = [7];
            const actual = luckyNumbers([[7,8],[1,2]]);
            expect(actual).to.deep.equal(expected);
        });
    });
