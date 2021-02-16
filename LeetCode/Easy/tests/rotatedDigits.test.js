const { rotatedDigits } = require("../rotatedDigits.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("rotatedDigits", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: 10
            Output: 4
            */
            const expected = 4;
            const actual = rotatedDigits(10);
            expect(actual).to.deep.equal(expected);
        });
    });
