const { rotateString } = require("../rotateString.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("rotateString", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: A = 'abcde', B = 'cdeab'
            Output: true
            */
            const expected = true;
            const actual = rotateString('abcde','cdeab');
            expect(actual).to.deep.equal(expected);
        });
    });
