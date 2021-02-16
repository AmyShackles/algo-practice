const { arrayRankTransform } = require("../rankTransformOfAnArray.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("arrayRankTransform", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: arr = [40,10,20,30]
            Output: [4,1,2,3]
            */
            const expected = [4,1,2,3];
            const actual = arrayRankTransform([40,10,20,30]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: arr = [100,100,100]
            Output: [1,1,1]
            */
            const expected = [1,1,1];
            const actual = arrayRankTransform([100,100,100]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: arr = [37,12,28,9,100,56,80,5,12]
            Output: [5,3,4,2,8,6,7,1,3]
            */
            const expected = [5,3,4,2,8,6,7,1,3];
            const actual = arrayRankTransform([37,12,28,9,100,56,80,5,12]);
            expect(actual).to.deep.equal(expected);
        });
    });
