const { busyStudent } = require("../numberOfStudentsDoingHomeworkAtAGivenTime.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("busyStudent", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: startTime = [1,2,3], endTime = [3,2,7], queryTime = 4
            Output: 1
            */
            const expected = 1;
            const actual = busyStudent([1,2,3],[3,2,7],4);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: startTime = [4], endTime = [4], queryTime = 4
            Output: 1
            */
            const expected = 1;
            const actual = busyStudent([4],[4],4);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: startTime = [4], endTime = [4], queryTime = 5
            Output: 0
            */
            const expected = 0;
            const actual = busyStudent([4],[4],5);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: startTime = [1,1,1,1], endTime = [1,3,2,4], queryTime = 7
            Output: 0
            */
            const expected = 0;
            const actual = busyStudent([1,1,1,1],[1,3,2,4],7);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 5", () => {
            /*
            For sanity checking:
            Input: startTime = [9,8,7,6,5,4,3,2,1], endTime = [10,10,10,10,10,10,10,10,10], queryTime = 5
            Output: 5
            */
            const expected = 5;
            const actual = busyStudent([9,8,7,6,5,4,3,2,1],[10,10,10,10,10,10,10,10,10],5);
            expect(actual).to.deep.equal(expected);
        });
    });
