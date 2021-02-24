const { hammingDistance } = require("../hammingDistance.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("hammingDistance", () => {
    it("should return the right value for Example 1", () => {
        /*
            Sanity check:
            Input: x = 1, y = 4

            Output: 2
        */
        const expected = 2;
        const actual = hammingDistance(1, 4);
        expect(actual).to.deep.equal(expected);
    })
});
