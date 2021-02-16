const { largestTriangleArea } = require("../largestTriangleArea.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("largestTriangleArea", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
            Output: 2
            */
            const expected = 2;
            const actual = largestTriangleArea([[0,0],[0,1],[1,0],[0,2],[2,0]]);
            expect(actual).to.deep.equal(expected);
        });
    });
