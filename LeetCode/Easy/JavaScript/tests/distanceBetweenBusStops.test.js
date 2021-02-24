const { distanceBetweenBusStops } = require("../distanceBetweenBusStops.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("distanceBetweenBusStops", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: distance = [1,2,3,4], start = 0, destination = 1
            Output: 1
            */
            const expected = 1;
            const actual = distanceBetweenBusStops([1,2,3,4],0,1);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: distance = [1,2,3,4], start = 0, destination = 2
            Output: 3
            */
            const expected = 3;
            const actual = distanceBetweenBusStops([1,2,3,4],0,2);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: distance = [1,2,3,4], start = 0, destination = 3
            Output: 4
            */
            const expected = 4;
            const actual = distanceBetweenBusStops([1,2,3,4],0,3);
            expect(actual).to.deep.equal(expected);
        });
    });
