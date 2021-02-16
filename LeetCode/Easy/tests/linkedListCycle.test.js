const { hasCycle } = require("../linkedListCycle.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("hasCycle", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: head = [3,2,0,-4], pos = 1
            Output: true
            */
            const expected = true;
            const actual = hasCycle([3,2,0,-4],1);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: head = [1,2], pos = 0
            Output: true
            */
            const expected = true;
            const actual = hasCycle([1,2],0);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: head = [1], pos = -1
            Output: false
            */
            const expected = false;
            const actual = hasCycle([1],-1);
            expect(actual).to.deep.equal(expected);
        });
    });
