const { findDisappearedNumbers } = require("../findAllNumbersDisappearedInAnArray.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("findDisappearedNumbers", () => {
    it("should return the right value for Example 1", () => {
        /*
            Sanity check:
            Input:
            [4,3,2,7,8,2,3,1]
            Output:
            [5,6]
        */
       const expected = [5,6];
       const actual = findDisappearedNumbers([4,3,2,7,8,2,3,1]);
       expect(actual).to.deep.equal(expected);
    })
});
