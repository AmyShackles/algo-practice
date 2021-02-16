const { floodFill } = require("../floodFill.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("floodFill", () => {
    it("should return the right value for Example 1", () => {
        /*
            Sanity check:
            Input: 
            image = [[1,1,1],[1,1,0],[1,0,1]]
            sr = 1, sc = 1, newColor = 2
            Output: [[2,2,2],[2,2,0],[2,0,1]]
        */
        const expected = [[2,2,2],[2,2,0],[2,0,1]];
        const actual = floodFill( [[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2);
        expect(actual).to.deep.equal(expected);
    })
});
