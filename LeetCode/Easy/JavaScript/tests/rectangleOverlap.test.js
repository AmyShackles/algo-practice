const { isRectangleOverlap } = require("../rectangleOverlap.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("isRectangleOverlap", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: rec1 = [0,0,2,2], rec2 = [1,1,3,3]
            Output: true
            */
            const expected = true;
            const actual = isRectangleOverlap([0,0,2,2],[1,1,3,3]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: rec1 = [0,0,1,1], rec2 = [1,0,2,1]
            Output: false
            */
            const expected = false;
            const actual = isRectangleOverlap([0,0,1,1],[1,0,2,1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: rec1 = [0,0,1,1], rec2 = [2,2,3,3]
            Output: false
            */
            const expected = false;
            const actual = isRectangleOverlap([0,0,1,1],[2,2,3,3]);
            expect(actual).to.deep.equal(expected);
        });
    });
