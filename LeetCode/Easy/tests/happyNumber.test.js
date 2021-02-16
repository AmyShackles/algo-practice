const { isHappy } = require("../happyNumber.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("isHappy", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: n = 19
            Output: true
            */
            const expected = true;
            const actual = isHappy(19);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: n = 2
            Output: false
            */
            const expected = false;
            const actual = isHappy(2);
            expect(actual).to.deep.equal(expected);
        });
    });
