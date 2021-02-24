const { canPlaceFlowers } = require("../canPlaceFlowers.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("canPlaceFlowers", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: flowerbed = [1,0,0,0,1], n = 1
            Output: true
            */
            const expected = true;
            const actual = canPlaceFlowers([1,0,0,0,1],1);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: flowerbed = [1,0,0,0,1], n = 2
            Output: false
            */
            const expected = false;
            const actual = canPlaceFlowers([1,0,0,0,1],2);
            expect(actual).to.deep.equal(expected);
        });
    });
