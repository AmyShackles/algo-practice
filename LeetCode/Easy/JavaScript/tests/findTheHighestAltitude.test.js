const { largestAltitude } = require("../findTheHighestAltitude.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("largestAltitude", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: gain = [-5,1,5,0,-7]
            Output: 1
            */
            const expected = 1;
            const actual = largestAltitude([-5,1,5,0,-7]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: gain = [-4,-3,-2,-1,4,3,2]
            Output: 0
            */
            const expected = 0;
            const actual = largestAltitude([-4,-3,-2,-1,4,3,2]);
            expect(actual).to.deep.equal(expected);
        });
    });
