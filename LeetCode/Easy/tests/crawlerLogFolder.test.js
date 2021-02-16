const { minOperations } = require("../crawlerLogFolder.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("minOperations", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: logs = ["d1/","d2/","../","d21/","./"]
            Output: 2
            */
            const expected = 2;
            const actual = minOperations(["d1/","d2/","../","d21/","./"]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: logs = ["d1/","d2/","./","d3/","../","d31/"]
            Output: 3
            */
            const expected = 3;
            const actual = minOperations(["d1/","d2/","./","d3/","../","d31/"]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: logs = ["d1/","../","../","../"]
            Output: 0
            */
            const expected = 0;
            const actual = minOperations(["d1/","../","../","../"]);
            expect(actual).to.deep.equal(expected);
        });
    });
