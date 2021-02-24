const { countGoodTriplets } = require("../countGoodTriplets.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("countGoodTriplets", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
            Output: 4
            */
            const expected = 4;
            const actual = countGoodTriplets([3,0,1,1,9,7],7,2,3);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: arr = [1,1,2,2,3], a = 0, b = 0, c = 1
            Output: 0
            */
            const expected = 0;
            const actual = countGoodTriplets([1,1,2,2,3],0,0,1);
            expect(actual).to.deep.equal(expected);
        });
    });
