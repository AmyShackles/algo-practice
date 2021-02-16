const { numSpecialEquivGroups } = require("../groupsOfSpecialEquivalentStrings.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("numSpecialEquivGroups", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: ["abcd","cdab","cbad","xyzz","zzxy","zzyx"]
            Output: 3
            */
            const expected = 3;
            const actual = numSpecialEquivGroups(["abcd","cdab","cbad","xyzz","zzxy","zzyx"]);
            expect(actual).to.deep.equal(expected);
        });
    });
