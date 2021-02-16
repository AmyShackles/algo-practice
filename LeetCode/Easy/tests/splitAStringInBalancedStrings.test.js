const { balancedStringSplit } = require("../splitAStringInBalancedStrings.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("balancedStringSplit", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: s = "RLRRLLRLRL"
            Output: 4
            */
            const expected = 4;
            const actual = balancedStringSplit("RLRRLLRLRL");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: s = "RLLLLRRRLR"
            Output: 3
            */
            const expected = 3;
            const actual = balancedStringSplit("RLLLLRRRLR");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: s = "LLLLRRRR"
            Output: 1
            */
            const expected = 1;
            const actual = balancedStringSplit("LLLLRRRR");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: s = "RLRRRLLRLL"
            Output: 2
            */
            const expected = 2;
            const actual = balancedStringSplit("RLRRRLLRLL");
            expect(actual).to.deep.equal(expected);
        });
    });
