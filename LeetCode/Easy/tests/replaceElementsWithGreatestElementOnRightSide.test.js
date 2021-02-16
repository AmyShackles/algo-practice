const { replaceElements } = require("../replaceElementsWithGreatestElementOnRightSide.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("replaceElements", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: arr = [17,18,5,4,6,1]
            Output: [18,6,6,6,1,-1]
            */
            const expected = [18,6,6,6,1,-1];
            const actual = replaceElements([17,18,5,4,6,1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: arr = [400]
            Output: [-1]
            */
            const expected = [-1];
            const actual = replaceElements([400]);
            expect(actual).to.deep.equal(expected);
        });
    });
