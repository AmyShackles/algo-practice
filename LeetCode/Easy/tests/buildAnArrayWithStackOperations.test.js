const { buildArray } = require("../buildAnArrayWithStackOperations.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("buildArray", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: target = [1,3], n = 3
            Output: ["Push","Push","Pop","Push"]
            */
            const expected = ["Push","Push","Pop","Push"];
            const actual = buildArray([1,3],3);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: target = [1,2,3], n = 3
            Output: ["Push","Push","Push"]
            */
            const expected = ["Push","Push","Push"];
            const actual = buildArray([1,2,3],3);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: target = [1,2], n = 4
            Output: ["Push","Push"]
            */
            const expected = ["Push","Push"];
            const actual = buildArray([1,2],4);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: target = [2,3,4], n = 4
            Output: ["Push","Pop","Push","Push","Push"]
            */
            const expected = ["Push","Pop","Push","Push","Push"];
            const actual = buildArray([2,3,4],4);
            expect(actual).to.deep.equal(expected);
        });
    });
