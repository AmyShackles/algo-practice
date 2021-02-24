const { mostVisited } = require("../mostVisitedSectorInACircularTrack.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("mostVisited", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: n = 4, rounds = [1,3,1,2]
            Output: [1,2]
            */
            const expected = [1,2];
            const actual = mostVisited(4,[1,3,1,2]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: n = 2, rounds = [2,1,2,1,2,1,2,1,2]
            Output: [2]
            */
            const expected = [2];
            const actual = mostVisited(2,[2,1,2,1,2,1,2,1,2]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: n = 7, rounds = [1,3,5,7]
            Output: [1,2,3,4,5,6,7]
            */
            const expected = [1,2,3,4,5,6,7];
            const actual = mostVisited(7,[1,3,5,7]);
            expect(actual).to.deep.equal(expected);
        });
    });
