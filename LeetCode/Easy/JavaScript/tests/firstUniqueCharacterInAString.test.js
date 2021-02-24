const { firstUniqChar } = require("../firstUniqueCharacterInAString.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("firstUniqChar", () => {
    it("should return the right value for Example 1", () => {
        /*
        Sanity check:
        s = "leetcode"
        return 0.
        */
       const expected = 0;
       const actual = firstUniqChar("leetcode");
       expect(actual).to.deep.equal(expected);
    })
    it("should return the right value for Example 2", () => {
        /*
        Sanity check:
        s = "loveleetcode"
        return 2.
        */
       const expected = 2;
       const actual = firstUniqChar("loveleetcode");
       expect(actual).to.deep.equal(expected);
    })
});
