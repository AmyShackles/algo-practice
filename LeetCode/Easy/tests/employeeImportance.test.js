const { GetImportance } = require("../employeeImportance.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("GetImportance", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: [[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1
            Output: 11
            */
            const expected = 11;
            const actual = GetImportance([[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1);
            expect(actual).to.deep.equal(expected);
        });
    });
