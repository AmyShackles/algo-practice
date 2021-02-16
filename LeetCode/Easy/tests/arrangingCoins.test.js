const { arrangeCoins } = require("../arrangingCoins.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("arrangeCoins", () => {
    it("should return the right value for Example 1", () => {
        const expected = 2;
        const actual = arrangeCoins(5);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        const expected = 3;
        const actual = arrangeCoins(8);
        expect(actual).to.deep.equal(expected);
    });
});
