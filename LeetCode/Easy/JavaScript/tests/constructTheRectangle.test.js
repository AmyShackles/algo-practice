const { constructRectangle } = require("../constructTheRectangle.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("constructRectangle", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: area = 4
            Output: [2,2]
            */
            const expected = [2,2];
            const actual = constructRectangle(4);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: area = 37
            Output: [37,1]
            */
            const expected = [37,1];
            const actual = constructRectangle(37);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: area = 122122
            Output: [427,286]
            */
            const expected = [427,286];
            const actual = constructRectangle(122122);
            expect(actual).to.deep.equal(expected);
        });
    });
