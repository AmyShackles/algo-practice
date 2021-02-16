const { decompressRLElist } = require("../decompressRunLengthEncodedList.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("decompressRLElist", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: nums = [1,2,3,4]
            Output: [2,4,4,4]
            */
            const expected = [2,4,4,4];
            const actual = decompressRLElist([1,2,3,4]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: nums = [1,1,2,3]
            Output: [1,3,3]
            */
            const expected = [1,3,3];
            const actual = decompressRLElist([1,1,2,3]);
            expect(actual).to.deep.equal(expected);
        });
    });
