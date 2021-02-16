const { countStudents } = require("../numberOfStudentsUnableToEatLunch.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("countStudents", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: students = [1,1,0,0], sandwiches = [0,1,0,1]
            Output: 0 
            */
            const expected = 0 ;
            const actual = countStudents([1,1,0,0],[0,1,0,1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]
            Output: 3
            */
            const expected = 3;
            const actual = countStudents([1,1,1,0,0,1],[1,0,0,0,1,1]);
            expect(actual).to.deep.equal(expected);
        });
    });
