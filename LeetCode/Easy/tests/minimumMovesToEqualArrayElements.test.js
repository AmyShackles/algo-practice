const { minMoves } = require("../minimumMovesToEqualArrayElements.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("minMoves", () => {
    it("should return the right value for Example 1", () => {
        /*
            Input:
            [1,2,3]

            Output:
            3
        */
        const expected = 3;
        const actual = minMoves([1,2,3]);
        expect(actual).to.deep.equal(expected)
    })
});
