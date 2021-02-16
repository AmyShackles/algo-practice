const { findJudge } = require("../findTheTownJudge.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("findJudge", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: N = 2, trust = [[1,2]]
            Output: 2
            */
            const expected = 2;
            const actual = findJudge(2,[[1,2]]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: N = 3, trust = [[1,3],[2,3]]
            Output: 3
            */
            const expected = 3;
            const actual = findJudge(3,[[1,3],[2,3]]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: N = 3, trust = [[1,3],[2,3],[3,1]]
            Output: -1
            */
            const expected = -1;
            const actual = findJudge(3,[[1,3],[2,3],[3,1]]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: N = 3, trust = [[1,2],[2,3]]
            Output: -1
            */
            const expected = -1;
            const actual = findJudge(3,[[1,2],[2,3]]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 5", () => {
            /*
            For sanity checking:
            Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
            Output: 3
            */
            const expected = 3;
            const actual = findJudge(4,[[1,3],[1,4],[2,3],[2,4],[4,3]]);
            expect(actual).to.deep.equal(expected);
        });
    });
