const { containsNearbyDuplicate } = require("../containsDuplicateIi.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("containsNearbyDuplicate", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: nums = [1,2,3,1], k = 3
            Output: true
            */
            const expected = true;
            const actual = containsNearbyDuplicate([1,2,3,1],3);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: nums = [1,0,1,1], k = 1
            Output: true
            */
            const expected = true;
            const actual = containsNearbyDuplicate([1,0,1,1],1);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: nums = [1,2,3,1,2,3], k = 2
            Output: false
            */
            const expected = false;
            const actual = containsNearbyDuplicate([1,2,3,1,2,3],2);
            expect(actual).to.deep.equal(expected);
        });
    });
