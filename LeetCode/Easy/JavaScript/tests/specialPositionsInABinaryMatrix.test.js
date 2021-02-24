const { numSpecial } = require("../specialPositionsInABinaryMatrix.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("numSpecial", () => {
    it("should return the right value for Example 1", () => {
        /*
        Input: mat = [[1,0,0],
                    [0,0,1],
                    [1,0,0]]
        Output: 1
        */
        const expected = 1;
        const actual = numSpecial([
            [1, 0, 0],
            [0, 0, 1],
            [1, 0, 0],
        ]);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        /*
        Input: mat = [[1,0,0],
                    [0,1,0],
                    [0,0,1]]
        Output: 3
        */
        const expected = 3;
        const actual = numSpecial([
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
        ]);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 3", () => {
        /*
        Input: mat = [[0,0,0,1],
                    [1,0,0,0],
                    [0,1,1,0],
                    [0,0,0,0]]
        Output: 2

        */
        const expected = 2;
        const actual = numSpecial([
            [0, 0, 0, 1],
            [1, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
        ]);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 4", () => {
        /*
        Input: mat = [[0,0,0,0,0],
                    [1,0,0,0,0],
                    [0,1,0,0,0],
                    [0,0,1,0,0],
                    [0,0,0,1,1]]
        Output: 3
        */
        const expected = 3;
        const actual = numSpecial([
            [0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0],
            [0, 1, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 1, 1],
        ]);
        expect(actual).to.deep.equal(expected);
    });
});
