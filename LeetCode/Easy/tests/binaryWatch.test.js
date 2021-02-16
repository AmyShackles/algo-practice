const { readBinaryWatch } = require("../binaryWatch.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("readBinaryWatch", () => {
    it("should return the right value for Example 1", () => {
        /*
            Sanity checking:
            Input: n = 1
            Return: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]
        */
       const expected = ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"];
       const actual = readBinaryWatch(1);
       expect(actual).to.deep.equal(expected);
    });
});
