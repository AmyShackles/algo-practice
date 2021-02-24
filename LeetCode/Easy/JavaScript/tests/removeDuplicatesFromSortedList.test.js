const { deleteDuplicates } = require("../removeDuplicatesFromSortedList.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("deleteDuplicates", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: head = [1,1,2]
            Output: [1,2]
            */
            const expected = [1,2];
            const actual = deleteDuplicates([1,1,2]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: head = [1,1,2,3,3]
            Output: [1,2,3]
            */
            const expected = [1,2,3];
            const actual = deleteDuplicates([1,1,2,3,3]);
            expect(actual).to.deep.equal(expected);
        });
    });
