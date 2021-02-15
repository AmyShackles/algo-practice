const { mergeTrees } = require("../mergeTrees.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};
describe.todo("mergeTrees", () => {
    it("should return the right value for Example 1", () => {
        const expected = [3, 4, 5, 5, 4, null, 7];
        const actual = mergeTrees([1, 3, 2, 5], [2, 1, 3, null, 4, null, 7]);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        const expected = [2, 2];
        const actual = mergeTrees([1], [1, 2]);
        expect(actual).to.deep.equal(expected);
    });
});
