const { addDigits } = require("../addDigits.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("addDigits", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: 38
            Output: 2 
            */
            const expected = 2 ;
            const actual = addDigits(38);
            expect(actual).to.deep.equal(expected);
        });
    });
