const { removeElement } = require("../removeElement.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("removeElement", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: nums = [3,2,2,3], val = 3
            Output: 2, nums = [2,2]
            */
            const expected = 2, nums = [2,2];
            const actual = removeElement([3,2,2,3],3);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: nums = [0,1,2,2,3,0,4,2], val = 2
            Output: 5, nums = [0,1,4,0,3]
            */
            const expected = 5, nums = [0,1,4,0,3];
            const actual = removeElement([0,1,2,2,3,0,4,2],2);
            expect(actual).to.deep.equal(expected);
        });
    });
