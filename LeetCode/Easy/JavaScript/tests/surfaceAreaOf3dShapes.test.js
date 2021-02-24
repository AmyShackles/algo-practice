const { surfaceArea } = require("../surfaceAreaOf3dShapes.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("surfaceArea", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: grid = [[2]]
            Output: 10
            */
            const expected = 10;
            const actual = surfaceArea([[2]]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: grid = [[1,2],[3,4]]
            Output: 34
            */
            const expected = 34;
            const actual = surfaceArea([[1,2],[3,4]]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: grid = [[1,0],[0,2]]
            Output: 16
            */
            const expected = 16;
            const actual = surfaceArea([[1,0],[0,2]]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: grid = [[1,1,1],[1,0,1],[1,1,1]]
            Output: 32
            */
            const expected = 32;
            const actual = surfaceArea([[1,1,1],[1,0,1],[1,1,1]]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 5", () => {
            /*
            For sanity checking:
            Input: grid = [[2,2,2],[2,1,2],[2,2,2]]
            Output: 46
            */
            const expected = 46;
            const actual = surfaceArea([[2,2,2],[2,1,2],[2,2,2]]);
            expect(actual).to.deep.equal(expected);
        });
    });
