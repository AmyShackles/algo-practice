const { minDeletionSize } = require("../deleteColumnsToMakeSorted.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("minDeletionSize", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: strs = ["cba","daf","ghi"]
            Output: 1
            */
            const expected = 1;
            const actual = minDeletionSize(["cba","daf","ghi"]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: strs = ["a","b"]
            Output: 0
            */
            const expected = 0;
            const actual = minDeletionSize(["a","b"]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: strs = ["zyx","wvu","tsr"]
            Output: 3
            */
            const expected = 3;
            const actual = minDeletionSize(["zyx","wvu","tsr"]);
            expect(actual).to.deep.equal(expected);
        });
    });
