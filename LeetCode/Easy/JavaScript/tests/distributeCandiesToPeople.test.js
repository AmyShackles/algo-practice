const { distributeCandies } = require("../distributeCandiesToPeople.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("distributeCandies", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: candies = 7, num_people = 4
            Output: [1,2,3,1]
            */
            const expected = [1,2,3,1];
            const actual = distributeCandies(7,4);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: candies = 10, num_people = 3
            Output: [5,2,3]
            */
            const expected = [5,2,3];
            const actual = distributeCandies(10,3);
            expect(actual).to.deep.equal(expected);
        });
    });
