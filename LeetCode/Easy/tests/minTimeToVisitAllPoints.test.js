const { minTimeToVisitAllPoints } = require("../minTimeToVisitAllPoints.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};
describe.todo("minTimeToVisitAllPoints", () => {
    it("should return the right value for Example 1", () => {
        const expected = 7;
        const actual = minTimeToVisitAllPoints([
            [1, 1],
            [3, 4],
            [-1, 0],
        ]);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        const expected = 5;
        const actual = minTimeToVisitAllPoints([
            [3, 2],
            [-2, 2],
        ]);
        expect(actual).to.deep.equal(expected);
    });
});
