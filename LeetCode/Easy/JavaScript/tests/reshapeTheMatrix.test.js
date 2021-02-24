const { matrixReshape } = require("../reshapeTheMatrix.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("matrixReshape", () => {
    it("should return the right value for Example 1", () => {
        /*
            Input: 
            nums = 
            [[1,2],
            [3,4]]
            r = 1, c = 4
            Output: 
            [[1,2,3,4]]
        */

        const expected = [[1, 2, 3, 4]];
        const actual = matrixReshape(
            [
                [1, 2],
                [3, 4],
            ],
            1,
            4
        );
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        /*
            Input: 
            nums = 
            [[1,2],
            [3,4]]
            r = 2, c = 4
            Output: 
            [[1,2],
            [3,4]]
        */

        const expected = [
            [1, 2],
            [3, 4],
        ];
        const actual = matrixReshape(
            [
                [1, 2],
                [3, 4],
            ],
            2,
            4
        );
        expect(actual).to.deep.equal(expected);
    });
});
