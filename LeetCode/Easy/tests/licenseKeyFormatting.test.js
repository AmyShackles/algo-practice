const { licenseKeyFormatting } = require("../licenseKeyFormatting.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("licenseKeyFormatting", () => {
    it("should return the right value for Example 1", () => {
        /*
            Input: S = "5F3Z-2e-9-w", K = 4

            Output: "5F3Z-2E9W"
        */
        const expected = "5F3Z-2E9W";
        const actual = licenseKeyFormatting("5F3Z-2e-9-w", 4);
        expect(actual).to.deep.equal(expected);
    })
    it("should return the right value for Example 2", () => {
        /*
            Input: S = "2-5g-3-J", K = 2

            Output: "2-5G-3J"
        */
        const expected = "2-5G-3J";
        const actual = licenseKeyFormatting("2-5g-3-J", 2);
        expect(actual).to.deep.equal(expected);
    })
});
