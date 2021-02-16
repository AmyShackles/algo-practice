const { imageSmoother } = require("../imageSmoother.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("imageSmoother", () => {
    it("should return the right value for Example 1", () => {
        /*
            Input:
            [[1,1,1],
            [1,0,1],
            [1,1,1]]
            Output:
            [[0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]]
        */
        const expected = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ];
        const actual = imageSmoother([
            [1, 1, 1],
            [1, 0, 1],
            [1, 1, 1],
        ]);
        expect(actual).to.deep.equal(expected);
    });
});
