const { decode } = require("../decodeXoredArray.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe("decode", () => {
    it("should return the right value for Example 1", () => {
        /*
            For sanity checking:
            Input: encoded = [1,2,3], first = 1
            Output: [1,0,2,1]
            */
        const expected = [1, 0, 2, 1];
        const actual = decode([1, 2, 3], 1);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        /*
            For sanity checking:
            Input: encoded = [6,2,7,3], first = 4
            Output: [4,2,0,7,4]
            */
        const expected = [4, 2, 0, 7, 4];
        const actual = decode([6, 2, 7, 3], 4);
        expect(actual).to.deep.equal(expected);
    });
});
