const { mergeTwoLists } = require("../mergeTwoSortedLists.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("mergeTwoLists", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: l1 = [1,2,4], l2 = [1,3,4]
            Output: [1,1,2,3,4,4]
            */
            const expected = [1,1,2,3,4,4];
            const actual = mergeTwoLists([1,2,4],[1,3,4]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: l1 = [], l2 = []
            Output: []
            */
            const expected = [];
            const actual = mergeTwoLists([],[]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: l1 = [], l2 = [0]
            Output: [0]
            */
            const expected = [0];
            const actual = mergeTwoLists([],[0]);
            expect(actual).to.deep.equal(expected);
        });
    });
