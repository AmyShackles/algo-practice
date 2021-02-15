const { sortArrayByParity } = require("../sortArrayByParity.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};
describe.todo("sortArrayByParity", () => {
    it("should return the right value for Example 1", () => {
        const expected = [2, 4, 3, 1];
        const actual = sortArrayByParity([3, 1, 2, 4]);
        expect(actual).to.deep.equal(expected);
    });
});
