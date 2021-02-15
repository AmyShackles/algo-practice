const { balancedStringSplit } = require("../balancedStringSplit.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};
describe.todo("balancedStringSplit", () => {
    it("should return the right value for Example 1", () => {
        const expected = 4;
        const actual = balancedStringSplit("RLRRLLRLRL");
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        const expected = 3;
        const actual = balancedStringSplit("RLLLLRRRLR");
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 3", () => {
        const expected = 1;
        const actual = balancedStringSplit("LLLLRRRR");
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 3", () => {
        const expected = 2;
        const actual = balancedStringSplit("RLRRRLLRLL");
        expect(actual).to.deep.equal(expected);
    });
});
