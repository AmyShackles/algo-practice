const { islandPerimeter } = require("../islandPerimeter.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("islandPerimeter", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
            Output: 16
            */
            const expected = 16;
            const actual = islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: grid = [[1]]
            Output: 4
            */
            const expected = 4;
            const actual = islandPerimeter([[1]]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: grid = [[1,0]]
            Output: 4
            */
            const expected = 4;
            const actual = islandPerimeter([[1,0]]);
            expect(actual).to.deep.equal(expected);
        });
    });
