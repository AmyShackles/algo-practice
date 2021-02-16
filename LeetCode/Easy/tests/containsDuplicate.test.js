const { containsDuplicate } = require("../containsDuplicate.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("containsDuplicate", () => {
    it("should return the right value for Example 1", () => {
        /*
            Sanity check:
            Input: [1,2,3,1]
            Output: true
        */
       const expected = true;
       const actual = containsDuplicate([1,2,3,1]);
       expect(actual).to.deep.equal(expected);
    })
    it("should return the right value for Example 2", () => {
        /*
            Sanity check:
            Input: [1,2,3,4]
            Output: false
        */
       const expected = false;
       const actual = containsDuplicate([1,2,3,4]);
       expect(actual).to.deep.equal(expected);
    })
    it("should return the right value for Example 3", () => {
        /*
            Sanity check
            Input: [1,1,1,3,3,4,3,2,4,2]
            Output: true
        */
       const expected = true;
       const actual = containsDuplicate([1,1,1,3,3,4,3,2,4,2]);
       expect(actual).to.deep.equal(expected);
    })
});
