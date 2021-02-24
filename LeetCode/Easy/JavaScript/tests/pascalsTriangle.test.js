const { generate } = require("../pascalsTriangle.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("generate", () => {
    it("should return the right value for Example 1", () => {
        /*
            Input: 5
            Output:
            [
            [1],
            [1, 1],
            [1, 2, 1],
            [1, 3, 3, 1],
            [1, 4, 6, 4, 1],
            ]
        */
        const expected = [
            [1],
            [1, 1],
            [1, 2, 1],
            [1, 3, 3, 1],
            [1, 4, 6, 4, 1],
        ];
        const actual = generate(5);
        expect(actual).to.deep.equal(expected);
    });
});
