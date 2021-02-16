const { relativeSortArray } = require("../relativeSortArray.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("relativeSortArray", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
            Output: [2,2,2,1,4,3,3,9,6,7,19]
            */
            const expected = [2,2,2,1,4,3,3,9,6,7,19];
            const actual = relativeSortArray([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6]);
            expect(actual).to.deep.equal(expected);
        });
    });
