const { selfDividingNumbers } = require("../selfDividingNumbers.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("selfDividingNumbers", () => {
    it("should return the right value for Example 1", () => {
        /*
            Input: 
            left = 1, right = 22
            Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
        */
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22];
        const actual = selfDividingNumbers(1, 22);
        expect(actual).to.deep.equal(expected);
    })
});
