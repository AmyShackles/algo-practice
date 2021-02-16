const { countGoodRectangles } = require("../numberOfRectanglesThatCanFormTheLargestSquare.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("countGoodRectangles", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: rectangles = [[5,8],[3,9],[5,12],[16,5]]
            Output: 3
            */
            const expected = 3;
            const actual = countGoodRectangles([[5,8],[3,9],[5,12],[16,5]]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: rectangles = [[2,3],[3,7],[4,3],[3,7]]
            Output: 3
            */
            const expected = 3;
            const actual = countGoodRectangles([[2,3],[3,7],[4,3],[3,7]]);
            expect(actual).to.deep.equal(expected);
        });
    });
