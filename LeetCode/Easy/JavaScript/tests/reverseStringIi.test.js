const { reverseStr } = require("../reverseStringIi.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("reverseStr", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: s = "abcdefg", k = 2
            Output: "bacdfeg"
            */
            const expected = "bacdfeg";
            const actual = reverseStr("abcdefg",2);
            expect(actual).to.deep.equal(expected);
        });
    });
