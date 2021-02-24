const { projectionArea } = require("../projectionAreaOf3dShapes.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("projectionArea", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: grid = [[1,2],[3,4]]
            Output: 17
            */
            const expected = 17;
            const actual = projectionArea([[1,2],[3,4]]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: grid = [[2]]
            Output: 5
            */
            const expected = 5;
            const actual = projectionArea([[2]]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: grid = [[1,0],[0,2]]
            Output: 8
            */
            const expected = 8;
            const actual = projectionArea([[1,0],[0,2]]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: grid = [[1,1,1],[1,0,1],[1,1,1]]
            Output: 14
            */
            const expected = 14;
            const actual = projectionArea([[1,1,1],[1,0,1],[1,1,1]]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 5", () => {
            /*
            For sanity checking:
            Input: grid = [[2,2,2],[2,1,2],[2,2,2]]
            Output: 21
            */
            const expected = 21;
            const actual = projectionArea([[2,2,2],[2,1,2],[2,2,2]]);
            expect(actual).to.deep.equal(expected);
        });
    });
