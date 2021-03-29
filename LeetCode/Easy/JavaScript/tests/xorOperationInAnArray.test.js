const { xorOperation } = require("../xorOperationInAnArray.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe("xorOperation", () => {
    it("should return the right value for Example 1", () => {
        /*
            For sanity checking:
            Input: n = 5, start = 0
            Output: 8
            */
        const expected = 8;
        const actual = xorOperation(5, 0);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        /*
            For sanity checking:
            Input: n = 4, start = 3
            Output: 8
            */
        const expected = 8;
        const actual = xorOperation(4, 3);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 3", () => {
        /*
            For sanity checking:
            Input: n = 1, start = 7
            Output: 7
            */
        const expected = 7;
        const actual = xorOperation(1, 7);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 4", () => {
        /*
            For sanity checking:
            Input: n = 10, start = 5
            Output: 2
            */
        const expected = 2;
        const actual = xorOperation(10, 5);
        expect(actual).to.deep.equal(expected);
    });
});
