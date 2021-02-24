const { isOneBitCharacter } = require("../1BitAnd2BitCharacters.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("isOneBitCharacter", () => {
    it("should return the right value for Example 1", () => {
        /*
            For sanity checking:
            Input: bits = [1, 0, 0]
            Output: True
        */
        const expected = true;
        const actual = isOneBitCharacter([1, 0, 0]);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        /*
            For sanity checking:
            Input: bits = [1, 1, 1, 0]
            Output: False
        */
        const expected = false;
        const actual = isOneBitCharacter([1, 1, 1, 0]);
        expect(actual).to.deep.equal(expected);
    });
});
