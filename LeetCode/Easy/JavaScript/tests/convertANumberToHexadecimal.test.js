const { toHex } = require("../convertANumberToHexadecimal.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("toHex", () => {
    it("should return the right value for Example 1", () => {
        /* 
            Sanity check:
            Input: 26
            Output: "1a"
        */
        const expected = "1a";
        const actual = toHex(26);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        /*
            Sanity check:
            Input: -1
            Output: "ffffffff"
        */
        const expected = "ffffffff";
        const actual = toHex(-1);
        expect(actual).to.deep.equal(expected);
    })
});
