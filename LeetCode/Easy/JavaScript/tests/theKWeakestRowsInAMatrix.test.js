const { kWeakestRows } = require("../theKWeakestRowsInAMatrix.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("kWeakestRows", () => {
    it("it should return the right value for Example ", () => {
        /*
            Input: mat = 
            [[1,1,0,0,0],
            [1,1,1,1,0],
            [1,0,0,0,0],
            [1,1,0,0,0],
            [1,1,1,1,1]], 
            k = 3
            Output: [2,0,3]
        */
        const expected = [2, 0, 3];
        const actual = kWeakestRows(
            [
                [1, 1, 0, 0, 0],
                [1, 1, 1, 1, 0],
                [1, 0, 0, 0, 0],
                [1, 1, 0, 0, 0],
                [1, 1, 1, 1, 1],
            ],
            3
        );
        expect(actual).to.deep.equal(expected);
    });
    it("it should return the right value for Example 2", () => {
        /*
            Input: mat = 
            [[1,0,0,0],
            [1,1,1,1],
            [1,0,0,0],
            [1,0,0,0]], 
            k = 2
            Output: [0,2]
        */
        const expected = [0, 2];
        const actual = kWeakestRows(
            [
                [1, 0, 0, 0],
                [1, 1, 1, 1],
                [1, 0, 0, 0],
                [1, 0, 0, 0],
            ],
            2
        );
        expect(actual).to.deep.equal(expected);
    });
});
