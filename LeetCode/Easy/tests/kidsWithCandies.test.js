const { kidsWithCandies } = require("../kidsWithCandies.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};

describe.todo("kidsWithCandies", () => {
    it("should return the right value if candies = [2,3,5,1,3], extraCandies = 3", () => {
        const expected = [true, true, true, false, true];
        const actual = kidsWithCandies([2, 3, 5, 1, 3], 3);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value if candies = [4,2,1,1,2], extraCandies = 1", () => {
        const expected = [true, false, false, false, false];
        const actual = kidsWithCandies([4, 2, 1, 1, 2], 1);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value if candies = [12,1,12], extraCandies = 10", () => {
        const expected = [true, false, true];
        const actual = kidsWithCandies([12, 1, 12], 10);
        expect(actual).to.deep.equal(expected);
    });
});
