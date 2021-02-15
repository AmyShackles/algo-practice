const { countAndSay } = require("../countAndSay.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};
describe.todo("countAndSay", () => {
    it("should return the right value for Example 1", () => {
        const expected = "1";
        const actual = countAndSay(1);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 3", () => {
        const expected = "1211";
        const actual = countAndSay(4);
        expect(actual).to.deep.equal(expected);
    });
});
