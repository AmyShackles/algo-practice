const { subtractProductAndSum } = require("../subtractTheProductAndSumOfDigitsOfAnInteger.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe("subtractProductAndSum", () => {
    it("should return the right value for Example 1", () => {
        /*
            For sanity checking:
            Input: n = 234
            Output: 15 
            */
        const expected = 15;
        const actual = subtractProductAndSum(234);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        /*
            For sanity checking:
            Input: n = 4421
            Output: 21
            */
        const expected = 21;
        const actual = subtractProductAndSum(4421);
        expect(actual).to.deep.equal(expected);
    });
});
