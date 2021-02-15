const { countGoodTriplets } = require("../countGoodTriplets.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};
describe.todo("countGoodTriplets", () => {
    it("should return the right value for Example 1", () => {
        const expected = 4;
        const actual = countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        const expected = 0;
        const actual = countGoodTriplets([1, 1, 2, 2, 3], 0, 0, 1);
        expect(actual).to.deep.equal(expected);
    });
});
