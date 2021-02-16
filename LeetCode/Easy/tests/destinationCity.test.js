const { destCity } = require("../destinationCity.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("destCity", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
            Output: "Sao Paulo" 
            */
            const expected = "Sao Paulo" ;
            const actual = destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: paths = [["B","C"],["D","B"],["C","A"]]
            Output: "A"
            */
            const expected = "A";
            const actual = destCity([["B","C"],["D","B"],["C","A"]]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: paths = [["A","Z"]]
            Output: "Z"
            */
            const expected = "Z";
            const actual = destCity([["A","Z"]]);
            expect(actual).to.deep.equal(expected);
        });
    });
