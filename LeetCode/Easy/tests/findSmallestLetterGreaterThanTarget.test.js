const { nextGreatestLetter } = require("../findSmallestLetterGreaterThanTarget.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("nextGreatestLetter", () => {
    it("should return the right value for Example 1", () => {
        /* 
            Sanity check:
            Input:
            letters = ["c", "f", "j"]
            target = "a"
            Output: "c"
        */
       const expected = "c";
       const actual = nextGreatestLetter(["c", "f", "j"], "a");
       expect(actual).to.deep.equal(expected);

    });
    it("should return the right value for Example 2", () => {
        /* 
            Sanity check:

            Input:
            letters = ["c", "f", "j"]
            target = "c"
            Output: "f"
        */
       const expected = "f";
       const actual = nextGreatestLetter(["c", "f", "j"], "c");
       expect(actual).to.deep.equal(expected);

    });
    it("should return the right value for Example 3", () => {
        /* 
            Sanity check:

            Input:
            letters = ["c", "f", "j"]
            target = "d"
            Output: "f"
        */
       const expected = "f";
       const actual = nextGreatestLetter(["c", "f", "j"], "d");
       expect(actual).to.deep.equal(expected);

    });
    it("should return the right value for Example 4", () => {
        /* 
            Sanity check:

            Input:
            letters = ["c", "f", "j"]
            target = "g"
            Output: "j"
        */
       const expected = "j";
       const actual = nextGreatestLetter(["c", "f", "j"], "g");
       expect(actual).to.deep.equal(expected);

    });
    it("should return the right value for Example 5", () => {
        /* 
            Sanity check:

            Input:
            letters = ["c", "f", "j"]
            target = "j"
            Output: "c"
        */
       const expected = "c";
       const actual = nextGreatestLetter(["c", "f", "j"], "j");
       expect(actual).to.deep.equal(expected);

    });
    it("should return the right value for Example 6", () => {
        /* 
            Sanity check:

            Input:
            letters = ["c", "f", "j"]
            target = "k"
            Output: "c"
        */
       const expected = "c";
       const actual = nextGreatestLetter(["c", "f", "j"], "k");
       expect(actual).to.deep.equal(expected);
    });
});
