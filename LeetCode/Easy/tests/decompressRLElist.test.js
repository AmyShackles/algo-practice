const { decompressRLElist } = require("../decompressRLElist.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};

describe.todo("decompressRLElist", () => {
    it("should return the right value for Example 1", () => {
        const expected = [2, 4, 4, 4];
        const actual = decompressRLElist([1, 2, 3, 4]);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        const expected = [1, 3, 3];
        const actual = decompressRLElist([1, 1, 2, 3]);
        expect(actual).to.deep.equal(expected);
    });
});
