const { totalMoney } = require("../calculateMoneyInLeetcodeBank.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("totalMoney", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: n = 4
            Output: 10
            */
            const expected = 10;
            const actual = totalMoney(4);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: n = 10
            Output: 37
            */
            const expected = 37;
            const actual = totalMoney(10);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: n = 20
            Output: 96
            */
            const expected = 96;
            const actual = totalMoney(20);
            expect(actual).to.deep.equal(expected);
        });
    });
