const { checkRecord } = require("../studentAttendanceRecordI.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("checkRecord", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: "PPALLP"
            Output: True
            */
            const expected = True;
            const actual = checkRecord("PPALLP");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: "PPALLL"
            Output: False
            */
            const expected = False;
            const actual = checkRecord("PPALLL");
            expect(actual).to.deep.equal(expected);
        });
    });
