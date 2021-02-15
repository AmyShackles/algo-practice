const { subtractProductAndSum } = require("../subtractProductAndSum.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};

describe.todo("subtractProductAndSum", () => {
    it("should return the right value for Example 1", () => {
        const expected = 15;
        const actual = subtractProductAndSum(234);
        expect(actual).to.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        const expected = 21;
        const actual = subtractProductAndSum(4421);
        expect(actual).to.equal(expected);
    });
});
