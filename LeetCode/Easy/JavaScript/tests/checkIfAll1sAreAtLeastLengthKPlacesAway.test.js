const { kLengthApart } = require("../checkIfAll1sAreAtLeastLengthKPlacesAway.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("kLengthApart", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: nums = [1,0,0,0,1,0,0,1], k = 2
            Output: true
            */
            const expected = true;
            const actual = kLengthApart([1,0,0,0,1,0,0,1],2);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: nums = [1,0,0,1,0,1], k = 2
            Output: false
            */
            const expected = false;
            const actual = kLengthApart([1,0,0,1,0,1],2);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: nums = [1,1,1,1,1], k = 0
            Output: true
            */
            const expected = true;
            const actual = kLengthApart([1,1,1,1,1],0);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: nums = [0,1,0,1], k = 1
            Output: true
            */
            const expected = true;
            const actual = kLengthApart([0,1,0,1],1);
            expect(actual).to.deep.equal(expected);
        });
    });
