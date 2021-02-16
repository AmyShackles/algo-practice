const { sortArrayByParityII } = require("../sortArrayByParityIi.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("sortArrayByParityII", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: [4,2,5,7]
            Output: [4,5,2,7]
            */
            const expected = [4,5,2,7];
            const actual = sortArrayByParityII([4,2,5,7]);
            expect(actual).to.deep.equal(expected);
        });
    });
