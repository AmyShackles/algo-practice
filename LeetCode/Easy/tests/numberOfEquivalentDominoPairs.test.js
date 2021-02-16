const { numEquivDominoPairs } = require("../numberOfEquivalentDominoPairs.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("numEquivDominoPairs", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]
            Output: 1
            */
            const expected = 1;
            const actual = numEquivDominoPairs([[1,2],[2,1],[3,4],[5,6]]);
            expect(actual).to.deep.equal(expected);
        });
    });
