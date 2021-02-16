const { moveZeroes } = require("../moveZeroes.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("moveZeroes", () => {
    it("should return the right value for Example 1", () => {
        /*
            Input: [0,1,0,3,12]
            Output: [1,3,12,0,0]
        */
        const expected = [1,3,12,0,0];
        const actual = moveZeroes([0,1,0,3,12]);
        expect(actual).to.deep.equal(expected);
    })
});
