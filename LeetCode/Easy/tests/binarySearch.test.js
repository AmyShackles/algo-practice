const { search } = require("../binarySearch.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("search", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: nums = [-1,0,3,5,9,12], target = 9
            Output: 4
            */
            const expected = 4;
            const actual = search([-1,0,3,5,9,12],9);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: nums = [-1,0,3,5,9,12], target = 2
            Output: -1
            */
            const expected = -1;
            const actual = search([-1,0,3,5,9,12],2);
            expect(actual).to.deep.equal(expected);
        });
    });
