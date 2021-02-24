const { findTheDistanceValue } = require("../findTheDistanceValueBetweenTwoArrays.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("findTheDistanceValue", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2
            Output: 2
            */
            const expected = 2;
            const actual = findTheDistanceValue([4,5,8],[10,9,1,8],2);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3
            Output: 2
            */
            const expected = 2;
            const actual = findTheDistanceValue([1,4,2,3],[-4,-3,6,10,20,30],3);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6
            Output: 1
            */
            const expected = 1;
            const actual = findTheDistanceValue([2,1,100,3],[-5,-2,10,-3,7],6);
            expect(actual).to.deep.equal(expected);
        });
    });
