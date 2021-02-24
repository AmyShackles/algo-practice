const { kidsWithCandies } = require("../kidsWithTheGreatestNumberOfCandies.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("kidsWithCandies", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: candies = [2,3,5,1,3], extraCandies = 3
            Output: [true,true,true,false,true] 
            */
            const expected = [true,true,true,false,true] ;
            const actual = kidsWithCandies([2,3,5,1,3],3);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: candies = [4,2,1,1,2], extraCandies = 1
            Output: [true,false,false,false,false] 
            */
            const expected = [true,false,false,false,false] ;
            const actual = kidsWithCandies([4,2,1,1,2],1);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: candies = [12,1,12], extraCandies = 10
            Output: [true,false,true]
            */
            const expected = [true,false,true];
            const actual = kidsWithCandies([12,1,12],10);
            expect(actual).to.deep.equal(expected);
        });
    });
