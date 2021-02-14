const {
    smallerNumbersThanCurrent,
} = require("../smallerNumbersThanCurrent.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};

describe.todo("smallerNumbersThanCurrent", () => {
    it("should return the right value for [8,1,2,2,3]", () => {
        const expected = [4, 0, 1, 1, 3];
        const actual = smallerNumbersThanCurrent([8, 1, 2, 2, 3]);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for [6,5,4,8]", () => {
        const expected = [2, 1, 0, 3];
        const actual = smallerNumbersThanCurrent([6, 5, 4, 8]);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for [7,7,7,7]", () => {
        const expected = [0, 0, 0, 0];
        const actual = smallerNumbersThanCurrent([7, 7, 7, 7]);
        expect(actual).to.deep.equal(expected);
    });
});
