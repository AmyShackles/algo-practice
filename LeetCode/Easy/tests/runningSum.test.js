const { runningSum } = require("../runningSum.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};

describe.todo("runningSum", () => {
    it("should return the right value when nums is [1,2,3,4]", () => {
        const expected = [1, 3, 6, 10];
        const actual = runningSum([1, 2, 3, 4]);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value when nums is [1,1,1,1,1]", () => {
        const expected = [1, 2, 3, 4, 5];
        const actual = runningSum([1, 1, 1, 1, 1]);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value if nums is [3,1,2,10,1]", () => {
        const expected = [3, 4, 6, 16, 17];
        const actual = runningSum([3, 1, 2, 10, 1]);
        expect(actual).to.deep.equal(expected);
    });
});
