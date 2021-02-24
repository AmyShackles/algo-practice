const { lastStoneWeight } = require("../lastStoneWeight.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("lastStoneWeight", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: [2,7,4,1,8,1]
            Output: 1
            */
            const expected = 1;
            const actual = lastStoneWeight([2,7,4,1,8,1]);
            expect(actual).to.deep.equal(expected);
        });
    });
