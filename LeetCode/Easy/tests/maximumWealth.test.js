const { maximumWealth } = require("../maximumWealth.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};

describe.todo("maximumWealth", () => {
    it("should return the right value if accounts is [[1,2,3],[3,2,1]]", () => {
        const expected = 6;
        const actual = maximumWealth([
            [1, 2, 3],
            [3, 2, 1],
        ]);
        expect(actual).to.equal(expected);
    });
    it("should return the right value if accounts is [[1,5],[7,3],[3,5]]", () => {
        const expected = 10;
        const actual = maximumWealth([
            [1, 5],
            [7, 3],
            [3, 5],
        ]);
        expect(actual).to.equal(expected);
    });
    it("should return the right value if accounts is [[2,8,7],[7,1,3],[1,9,5]]", () => {
        const expected = 17;
        const actual = maximumWealth([
            [1, 5],
            [7, 3],
            [3, 5],
        ]);
        expect(actual).to.equal(expected);
    });
});
