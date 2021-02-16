const { isBoomerang } = require("../validBoomerang.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("isBoomerang", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: [[1,1],[2,3],[3,2]]
            Output: true
            */
            const expected = true;
            const actual = isBoomerang([[1,1],[2,3],[3,2]]);
            expect(actual).to.deep.equal(expected);
        });
    });
